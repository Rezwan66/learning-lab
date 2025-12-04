import express, { NextFunction, Request, Response } from 'express';
import initDB, { pool } from './config/db';
import logger from './middleware/logger';
import { userRoutes } from './modules/user/user.routes';
import { todoRoutes } from './modules/todo/todo.routes';
import { authRoutes } from './modules/auth/auth.routes';

const app = express();

//$ (body) parser: middleware
app.use(express.json()); //* for decoding json body data
// app.use(express.urlencoded()); //* for decoding x-www-form-urlencoded body data

// initializing database
initDB();

// logger
app.get('/', logger, (req: Request, res: Response) => {
  res.send('Express Server is running with Typescript! 🚚');
});

//^ users CRUD
// "/" -> localhost:5000/
app.use('/users', logger, userRoutes);

//^ todos CRUD
app.use('/todos', logger, todoRoutes);

//^ auth route
app.use('/auth', logger, authRoutes);

//! NOT Found route (always at last)
app.use(logger, (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found!',
    path: req.path,
  });
});

export default app;
