import { CommentStatus } from '../../../generated/prisma/enums';
import { prisma } from '../../lib/prisma';

const createComment = async (payload: {
  content: string;
  authorId: string;
  postId: string;
  parentId?: string;
}) => {
  await prisma.post.findUniqueOrThrow({
    // throws specialized error if nothing found
    where: {
      id: payload.postId,
    },
  });
  if (payload.parentId) {
    await prisma.comment.findUniqueOrThrow({
      where: {
        id: payload.parentId,
      },
    });
  }
  return await prisma.comment.create({
    data: payload,
  });
};

const getCommentById = async (id: string) => {
  const result = await prisma.comment.findUnique({
    where: {
      id,
    },
    include: {
      post: {
        select: {
          id: true,
          title: true,
          views: true,
        },
      },
    },
  });

  return result;
};

const getCommentsByAuthor = async (authorId: string) => {
  return await prisma.comment.findMany({
    where: {
      authorId,
    },
    orderBy: { createdAt: 'desc' },
    include: {
      post: {
        select: {
          id: true,
          title: true,
        },
      },
    },
  });
};

//## Delete own comment
// - Must be logged in
// - Only able to delete own comment
const deleteComment = async (commentId: string, authorId: string) => {
  const commentData = await prisma.comment.findFirst({
    where: {
      id: commentId,
      authorId,
    },
    select: {
      id: true,
    },
  });
  if (!commentData) {
    throw new Error('Invalid Input!');
  }

  return await prisma.comment.delete({
    where: {
      id: commentData.id,
    },
  });
};

//## Update comment
// - Must be logged in and update own comment - authorId
// - commentId, updateData
const updateComment = async (
  commentId: string,
  data: { content?: string; status?: CommentStatus },
  authorId: string
) => {
  const commentData = await prisma.comment.findFirst({
    where: {
      id: commentId,
      authorId,
    },
    select: {
      id: true,
    },
  });
  if (!commentData) {
    throw new Error('Invalid Input!');
  }

  return await prisma.comment.update({
    where: {
      id: commentId,
      authorId,
    },
    data,
  });
};

//## Admin Only
const moderateComment = async (id: string, data: { status: CommentStatus }) => {
  const commentData = await prisma.comment.findUniqueOrThrow({
    where: {
      id,
    },
    select: {
      id: true,
      status: true,
    },
  });

  if (commentData.status === data.status) {
    throw new Error(
      `Your provided status (${data.status}) is already up to date!`
    );
  }

  return await prisma.comment.update({
    where: {
      id,
    },
    data,
  });
};

export const CommentService = {
  createComment,
  getCommentById,
  getCommentsByAuthor,
  deleteComment,
  updateComment,
  moderateComment,
};
