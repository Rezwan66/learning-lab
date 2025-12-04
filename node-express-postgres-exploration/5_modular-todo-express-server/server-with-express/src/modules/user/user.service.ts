//? Services file will contain all business logic

import { pool } from '../../config/db';
import bcrypt from 'bcryptjs';

const createUser = async (payload: Record<string, unknown>) => {
  const { name, role, email, password } = payload;

  const hashedPass = await bcrypt.hash(password as string, 10);

  const result = await pool.query(
    `INSERT INTO users(name,role,email,password) VALUES($1,$2,$3,$4) RETURNING *`,
    [name, role, email, hashedPass]
  );
  return result;
};

const getUser = async () => {
  return await pool.query(`SELECT * FROM users`);
};

const getSingleUser = async (id: string) => {
  return await pool.query(`SELECT * FROM users WHERE id=$1`, [id]);
};

const updateUser = async (name: string, email: string, id: string) => {
  const result = await pool.query(
    `UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *`,
    [name, email, id]
  );
  return result;
};

const deleteUser = async (id: string) => {
  return await pool.query(`DELETE FROM users WHERE id=$1`, [id]);
};

export const userServices = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
