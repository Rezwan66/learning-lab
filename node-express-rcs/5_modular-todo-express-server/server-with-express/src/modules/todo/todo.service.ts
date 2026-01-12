import { pool } from '../../config/db';

//? Record<string, unknown> => this is essentially object type {key: value}, with key:string and value: unknown
const createTodo = async (payload: Record<string, unknown>) => {
  const { user_id, title } = payload;
  const result = await pool.query(
    `INSERT INTO todos(user_id,title) VALUES($1,$2) RETURNING *`,
    [user_id, title]
  );
  return result;
};

const getTodo = async () => {
  return await pool.query(`SELECT * FROM todos`);
};

const getSingleTodo = async (id: string) => {
  return await pool.query(`SELECT * FROM todos WHERE id=$1`, [id]);
};

const updateTodo = async (title: string, completed: boolean, id: string) => {
  return await pool.query(
    `UPDATE todos SET title=$1, completed=$2 WHERE id=$3 RETURNING *`,
    [title, completed, id]
  );
};

const deleteTodo = async (id: string) => {
  return await pool.query(`DELETE FROM todos WHERE id=$1`, [id]);
};

export const todoServices = {
  createTodo,
  getTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
};
