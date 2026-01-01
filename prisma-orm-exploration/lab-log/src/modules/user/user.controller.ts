import { RequestHandler } from 'express';
import { prisma } from '../../lib/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { userService } from './user.service';

const register: RequestHandler = async (req, res) => {
  const payload = req.body;

  const user = await userService.register(payload);

  res.status(201).send({ message: 'Registered Successfully', data: user });
};

const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  const token = await userService.login(email, password);

  res.status(200).send({ message: 'Logged In Successfully', token });
};

export const userController = { register, login };
