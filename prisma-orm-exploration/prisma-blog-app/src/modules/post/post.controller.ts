import { NextFunction, Request, Response } from 'express';
import { PostService } from './post.service';

import { PostStatus } from '../../../generated/prisma/enums';
import paginationSortingHelper from '../../helpers/paginationSortingHelper';
import { UserRole } from '../../middlewares/auth';

const createPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      return res.status(400).json({
        error: 'Unauthorized!',
      });
    }
    const result = await PostService.createPost(
      req.body,
      req.user.id as string
    );
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const getAllPosts = async (req: Request, res: Response) => {
  try {
    const { search } = req.query;
    // console.log(search);
    const searchString = typeof search === 'string' ? search : undefined;
    const tags = req.query.tags ? (req.query.tags as string).split(',') : [];
    //* only true or false
    const isFeatured = req.query.isFeatured
      ? req.query.isFeatured === 'true'
        ? true
        : req.query.isFeatured === 'false'
        ? false
        : undefined
      : undefined;
    // console.log({ isFeatured });
    const status = req.query.status as PostStatus | undefined;
    // console.log({ status });
    const authorId = req.query.authorId as string | undefined;
    // console.log({ authorId });

    //* PAGINATION: Prisma offers two types- offset, cursor-based
    //@ Offset pagination
    // const page = Number(req.query.page ?? 1);
    // const limit = Number(req.query.limit ?? 10);
    // const skip = (page - 1) * limit;

    //* SORTING
    // const sortBy = (req.query.sortBy as string) ?? undefined;
    // const sortOrder = (req.query.sortOrder as string) ?? undefined;

    const { page, limit, skip, sortBy, sortOrder } = paginationSortingHelper(
      req.query
    );
    // console.log('options:', options);

    const result = await PostService.getAllPosts({
      search: searchString,
      tags,
      isFeatured,
      status,
      authorId,
      page,
      limit,
      skip,
      sortBy,
      sortOrder,
    });
    res.status(200).json({
      message: 'Retrieved all posts successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      error: 'Cannot get posts',
      details: error,
    });
  }
};

const getPostById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { postId } = req.params;
    if (!postId) {
      throw new Error('Post ID is required!');
    }

    const result = await PostService.getPostById(postId);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getMyPosts = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    if (!user) {
      throw new Error('You are not authorized!');
    }

    const result = await PostService.getMyPosts(user.id);
    res.status(200).json(result);
  } catch (e) {
    const errorMessage =
      e instanceof Error ? e.message : 'Post retrieval failed!';
    res.status(400).json({
      message: errorMessage,
      details: e,
    });
  }
};

const updatePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { postId } = req.params;
    const user = req.user;
    if (!user) {
      throw new Error('You are not authorized!');
    }

    const isAdmin = user.role === UserRole.ADMIN;
    console.log(user);
    const result = await PostService.updatePost(
      postId as string,
      req.body,
      user.id,
      isAdmin
    );
    res.status(200).json(result);
  } catch (e) {
    next(e);
  }
};

const deletePost = async (req: Request, res: Response) => {
  try {
    const { postId } = req.params;
    const user = req.user;
    if (!user) {
      throw new Error('You are not authorized!');
    }
    console.log(user);
    const isAdmin = user.role === UserRole.ADMIN;

    const result = await PostService.deletePost(
      postId as string,
      user.id,
      isAdmin
    );
    res.status(200).json(result);
  } catch (e) {
    const errorMessage =
      e instanceof Error ? e.message : 'Post deletion failed!';
    res.status(400).json({
      message: errorMessage,
      details: e,
    });
  }
};

const getStats = async (req: Request, res: Response) => {
  try {
    console.log(req.user);
    const result = await PostService.getStats();
    res.status(200).json(result);
  } catch (e) {
    const errorMessage =
      e instanceof Error ? e.message : 'Stats retrieval failed!';
    res.status(400).json({
      message: errorMessage,
      details: e,
    });
  }
};

export const PostController = {
  createPost,
  getAllPosts,
  getPostById,
  getMyPosts,
  updatePost,
  deletePost,
  getStats,
};
