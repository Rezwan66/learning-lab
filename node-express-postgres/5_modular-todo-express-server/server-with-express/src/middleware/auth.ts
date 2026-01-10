//$ We will use the auth middleware to verify, where needed, if it is a valid user!
//^ the token can be stored in the request header

import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';

//! higher order function => may or may not take a function as parameter, but WILL return a function!! --> return korbe function ke

// roles = ['admin','user']
const auth = (...roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      // console.log({ authToken: token });
      if (!token) {
        return res.status(500).json({
          message: 'You are not allowed to perform this operation!',
        });
      }
      const decoded = jwt.verify(
        token,
        config.jwt_secret as string
      ) as JwtPayload;
      console.log({ decoded });
      req.user = decoded;

      // ['admin']
      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(500).json({
          success: false,
          message: 'Unauthorized!',
        });
      }

      next();
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  };
};

export default auth;
