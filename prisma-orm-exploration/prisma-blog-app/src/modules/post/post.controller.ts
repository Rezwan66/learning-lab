import { Request, Response } from 'express';
import { PostService } from './post.service';

const createPost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.createPost(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({
      error: 'Post creation failed!',
      details: error,
    });
  }
};

const getAllPosts = async (req: Request, res: Response) => {
  try {
    const result = await PostService.getAllPosts();
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

export const PostController = { createPost, getAllPosts };
