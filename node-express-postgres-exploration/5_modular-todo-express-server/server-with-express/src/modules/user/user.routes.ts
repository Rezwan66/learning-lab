// import { Router } from "express";
import express, { Request, Response } from 'express';
import { pool } from '../../config/db';
import { userControllers } from './user.controller';
import auth from '../../middleware/auth';

// const router=Router()
const router = express.Router();

//$ app.use('/users',logger,userRoutes)
//* routes -> controller -> service
// localhost:5000/users/

router.post('/', userControllers.createUser);

router.get('/', auth('admin'), userControllers.getUser);

router.get('/:id', auth('admin', 'user'), userControllers.getSingleUser);

router.put('/:id', userControllers.updateUser);

router.delete('/:id', userControllers.deleteUser);

export const userRoutes = router;
