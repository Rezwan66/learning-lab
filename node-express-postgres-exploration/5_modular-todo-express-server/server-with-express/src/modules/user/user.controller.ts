//* controller file wll contain all req,res related transformations

import { Request, Response } from 'express';
import { pool } from '../../config/db';
import { userServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
  // const { name, email } = req.body;

  try {
    const result = await userServices.createUser(req.body);
    // console.log(result.rows[0]);
    res.status(201).json({
      success: true,
      message: 'Data inserted successfully',
      data: result.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getUser();

    res.status(200).json({
      success: true,
      message: 'Users retrieved successfully',
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

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await userServices.getSingleUser(id as string);
    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: 'User not found',
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'User retrieved successfully',
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

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const result = await userServices.updateUser(name, email, id!);
    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: 'User not found',
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'User updated successfully',
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

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await userServices.deleteUser(id!);
    // console.log(result);
    if (result.rowCount === 0) {
      //when we delete a data we have no response for rows, but if a row is deleted, we will have rowCount = 1
      res.status(404).json({
        success: false,
        message: 'User not found',
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'User deleted successfully',
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

export const userControllers = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
