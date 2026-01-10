import express, { Application } from 'express';
import { postRouter } from './modules/post/post.routes';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './lib/auth';
import cors from 'cors';
import { commentRouter } from './modules/comment/comment.routes';
import errorHandler from './middlewares/globalErrorHandler';
import { notFound } from './middlewares/notFound';

const app: Application = express();

app.use(
  cors({
    origin: process.env.APP_URL || 'http://localhost:4000', // client side url
    credentials: true,
  })
);

app.use(express.json());

// app.all('/api/auth/*splat', toNodeHandler(auth));
app.all('/api/auth/{*any}', toNodeHandler(auth));

app.use('/posts', postRouter);

app.use('/comments', commentRouter);

app.get('/', (req, res) => {
  res.send('Prisma Blog Server is Running 🍕');
});

app.use(notFound);
app.use(errorHandler);

export default app;
