// (req, res, next)

import { Request, Response, NextFunction } from 'express';
import { Role } from '../generated/prisma/enums';
import jwt, { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user: JwtPayload;
    }
  }
}

const auth = (...roles: Role[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1]; // 'Bearer <token>'

    if (!token) return res.send('Please provide token!');

    try {
      const decoded = jwt.verify(token as string, 'our secret');
      // console.log(decoded);

      if (!decoded) return res.send('Unauthorized!');

      req.user = decoded as JwtPayload;

      if (roles && !roles.includes(req.user.role)) {
        return res.send('Forbidden!');
      }

      next();
    } catch (error) {
      console.error(error);
    }
  };
};

export default auth;
