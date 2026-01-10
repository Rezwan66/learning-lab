import { Request, Response } from 'express';
import { todoServices } from './todo.service';

const createTodo = async (req: Request, res: Response) => {
  //   const { user_id, title } = req.body;
  try {
    const result = await todoServices.createTodo(req.body);
    res.status(201).json({
      success: true,
      message: 'Todo created successfully',
      data: result.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getTodo = async (req: Request, res: Response) => {
  try {
    const result = await todoServices.getTodo();

    res.status(200).json({
      success: true,
      message: 'Todos retrieved successfully',
      data: result.rows,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      details: err,
    });
  }
};

const getSingleTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(typeof id);
  try {
    const result = await todoServices.getSingleTodo(id!);
    console.log(typeof result.rows[0].user_id);
    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: 'Todos not found',
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'Todos retrieved successfully',
        data: result.rows[0],
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  try {
    const result = await todoServices.updateTodo(
      title,
      completed,
      id as string
    );
    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: 'Todo not found',
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'Todo updated successfully',
        data: result.rows[0],
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await todoServices.deleteTodo(id!);
    if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        message: 'Todo not found',
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'Todo deleted successfully',
        data: null,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const todoControllers = {
  createTodo,
  getTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
};
