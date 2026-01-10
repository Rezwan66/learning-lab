import {
  CommentStatus,
  Post,
  PostStatus,
} from '../../../generated/prisma/client';
import { PostWhereInput } from '../../../generated/prisma/models';
import { prisma } from '../../lib/prisma';
import { UserRole } from '../../middlewares/auth';

const createPost = async (
  data: Omit<Post, 'id' | 'createdAt' | 'updatedAt' | 'authorId'>,
  userId: string
) => {
  const result = await prisma.post.create({
    data: { ...data, authorId: userId },
  });
  return result;
};

const getAllPosts = async ({
  search,
  tags,
  isFeatured,
  status,
  authorId,
  page,
  limit,
  skip,
  sortBy,
  sortOrder,
}: {
  search: string | undefined;
  tags: string[] | [];
  isFeatured: boolean | undefined;
  status: PostStatus | undefined;
  authorId: string | undefined;
  page: number;
  limit: number;
  skip: number;
  sortBy: string;
  sortOrder: string;
}) => {
  const andConditions: PostWhereInput | PostWhereInput[] = [];

  if (search) {
    andConditions.push({
      OR: [
        {
          title: {
            contains: search,
            mode: 'insensitive',
          },
        },
        {
          content: {
            contains: search,
            mode: 'insensitive',
          },
        },
        {
          tags: {
            has: search, // string array filtering (full word must match)
          },
        },
      ],
    });
  }
  if (tags.length) {
    andConditions.push({
      tags: {
        hasEvery: tags as string[],
      },
    });
  }
  if (typeof isFeatured === 'boolean') {
    andConditions.push({
      isFeatured,
    });
  }
  if (status) {
    andConditions.push({
      status,
    });
  }
  if (authorId) {
    andConditions.push({
      authorId,
    });
  }

  const allPost = await prisma.post.findMany({
    skip,
    take: limit,
    where: {
      AND: andConditions,
    },
    orderBy: {
      [sortBy]: sortOrder,
    },
    include: {
      _count: {
        select: { comments: true },
      },
    },
  });

  const total = await prisma.post.count({
    where: {
      AND: andConditions,
    },
  });

  return {
    data: allPost,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
};

const getPostById = async (postId: string) => {
  //* $transaction -> Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
  return await prisma.$transaction(async tx => {
    await tx.post.update({
      where: { id: postId },
      data: { views: { increment: 1 } },
    });
    const postData = await tx.post.findUnique({
      where: { id: postId },
      include: {
        comments: {
          where: {
            parentId: null,
            status: CommentStatus.APPROVED,
          },
          orderBy: {
            createdAt: 'desc',
          },
          include: {
            replies: {
              where: {
                status: CommentStatus.APPROVED,
              },
              orderBy: { createdAt: 'asc' },
              include: {
                replies: {
                  where: {
                    status: CommentStatus.APPROVED,
                  },
                  orderBy: { createdAt: 'asc' },
                },
              },
            },
          },
        },
        _count: {
          select: { comments: true },
        },
      },
    });
    return postData;
  });
};

const getMyPosts = async (authorId: string) => {
  //& check and find if the user is active or not
  await prisma.user.findUniqueOrThrow({
    where: {
      id: authorId,
      status: 'ACTIVE',
    },
    select: { id: true },
  });

  const result = await prisma.post.findMany({
    where: {
      authorId,
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      _count: {
        select: {
          comments: true,
        },
      },
    },
  });
  // const total = await prisma.post.count({
  //   where: {
  //     authorId,
  //   },
  // });
  const total = await prisma.post.aggregate({
    _count: {
      id: true,
    },
    where: { authorId },
  });
  return { data: result, total };
};

//**
// user - only allowed to update own post, but not isFeatured
// admin - update any post, any field
// */

const updatePost = async (
  postId: string,
  data: Partial<Post>,
  authorId: string,
  isAdmin: boolean
) => {
  const postData = await prisma.post.findUniqueOrThrow({
    where: {
      id: postId,
    },
    select: {
      id: true,
      authorId: true,
    },
  });

  if (!isAdmin && postData.authorId !== authorId) {
    throw new Error('You are not the owner/creator of this post!');
  }

  if (!isAdmin) {
    delete data.isFeatured;
  }

  return await prisma.post.update({
    where: {
      id: postData.id,
    },
    data,
  });
};

//**
// 1. user -> only delete own posts
// 2. admin -> delete any post
// */

const deletePost = async (
  postId: string,
  authorId: string,
  isAdmin: boolean
) => {
  const postData = await prisma.post.findUniqueOrThrow({
    where: {
      id: postId,
    },
    select: {
      id: true,
      authorId: true,
    },
  });

  if (!isAdmin && postData.authorId !== authorId) {
    throw new Error('You are not the owner/creator of this post!');
  }

  return await prisma.post.delete({
    where: {
      id: postId,
    },
  });
};

//# Get Statistics
// postCount, publishedPosts, draftPosts, totalComments, totalViews
//& these kinds of dashboard stats requests are almost always cached (e.g. for 5 mins, 1hr,etc.), so not to burden the server too much!

const getStats = async () => {
  return await prisma.$transaction(async tx => {
    const [
      totalPosts,
      publishedPosts,
      draftPosts,
      archivedPosts,
      totalComments,
      approvedComments,
      rejectedComments,
      totalUsers,
      adminCount,
      userCount,
      totalViews,
    ] = await Promise.all([
      await tx.post.count(),
      await tx.post.count({ where: { status: PostStatus.PUBLISHED } }),
      await tx.post.count({ where: { status: PostStatus.DRAFT } }),
      await tx.post.count({ where: { status: PostStatus.ARCHIVED } }),
      await tx.comment.count(),
      await tx.comment.count({ where: { status: CommentStatus.APPROVED } }),
      await tx.comment.count({ where: { status: CommentStatus.REJECT } }),
      await tx.user.count(),
      await tx.user.count({ where: { role: UserRole.ADMIN } }),
      await tx.user.count({ where: { role: UserRole.USER } }),
      await tx.post.aggregate({ _sum: { views: true } }),
    ]);

    return {
      totalPosts,
      publishedPosts,
      draftPosts,
      archivedPosts,
      totalComments,
      approvedComments,
      rejectedComments,
      totalUsers,
      adminCount,
      userCount,
      totalViews: totalViews._sum.views,
    };
  });
};

export const PostService = {
  createPost,
  getAllPosts,
  getPostById,
  getMyPosts,
  updatePost,
  deletePost,
  getStats,
};
