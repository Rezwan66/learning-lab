import express, { NextFunction, Request, Response } from 'express';
import { Pool } from 'pg';
import dotenv from 'dotenv';
import path from 'path';

// dotenv.config();
dotenv.config({ path: path.join(process.cwd(), '.env') }); //# more accurate

const app = express();
const port = 5000;

//$ (body) parser: middleware
app.use(express.json()); //* for decoding json body data
// app.use(express.urlencoded()); //* for decoding x-www-form-urlencoded body data

//@ DB
const pool = new Pool({
  connectionString: `${process.env.CONNECTION_STR}`,
});

const initDB = async () => {
  await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(150) UNIQUE NOT NULL,
        age INT,
        phone VARCHAR(15),
        address TEXT,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
        )
        `);

  await pool.query(`
        CREATE TABLE IF NOT EXISTS todos(
        id SERIAL PRIMARY KEY,
        user_id INT REFERENCES users(id) ON DELETE CASCADE,
        title VARCHAR(200) NOT NULL,
        description TEXT,
        completed BOOLEAN DEFAULT false,
        due_date DATE,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
        )
        `);
};
initDB();

//$ logger middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}\n`);
  next();
  //TODO: create a log.txt file then append for each api request
};

app.get('/', logger, (req: Request, res: Response) => {
  res.send('Express Server is running with Typescript! 🚚');
});

//^ users CRUD
app.post('/users', logger, async (req: Request, res: Response) => {
  const { name, email } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO users(name,email) VALUES($1,$2) RETURNING *`,
      [name, email]
    );
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
});
app.get('/users', logger, async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`SELECT * FROM users`);

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
});
app.get('/users/:id', logger, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await pool.query(`SELECT * FROM users WHERE id=$1`, [id]);
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
});
app.put('/users/:id', logger, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const result = await pool.query(
      `UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *`,
      [name, email, id]
    );
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
});
app.delete('/users/:id', logger, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await pool.query(`DELETE FROM users WHERE id=$1`, [id]);
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
});

//^ todos CRUD
app.post('/todos', logger, async (req: Request, res: Response) => {
  const { user_id, title } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO todos(user_id,title) VALUES($1,$2) RETURNING *`,
      [user_id, title]
    );
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
});
app.get('/todos', logger, async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`SELECT * FROM todos`);

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
});
app.get('/todos/:id', logger, async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query(`SELECT * FROM todos WHERE id=$1`, [id]);
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
});
app.put('/todos/:id', logger, async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  try {
    const result = await pool.query(
      `UPDATE todos SET title=$1, completed=$2 WHERE id=$3 RETURNING *`,
      [title, completed, id]
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
});
app.delete('/todos/:id', logger, async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query(`DELETE FROM todos WHERE id=$1`, [id]);
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
});

//! NOT Found route (always at last)
app.use(logger, (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found!',
    path: req.path,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
