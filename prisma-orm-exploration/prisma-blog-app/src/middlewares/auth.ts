import { NextFunction, Request, Response } from 'express';
import { auth as betterAuth } from '../lib/auth';
import { fromNodeHeaders } from 'better-auth/node';

export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        name: string;
        role: string;
        emailVerified: boolean;
      };
    }
  }
}

const auth = (...roles: UserRole[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      //* get user session
      // console.log(req.headers);
      const session = await betterAuth.api.getSession({
        headers: fromNodeHeaders(req.headers),
      });

      if (!session) {
        return res.status(401).json({
          success: false,
          message: 'You are not authorized!',
        });
      }

      if (!session.user.emailVerified) {
        return res.status(403).json({
          success: false,
          message: 'Email verification required. Please check your email!',
        });
      }

      if (roles.length && !roles.includes(session.user.role as UserRole)) {
        return res.status(403).json({
          success: false,
          message:
            'Forbidden! You don`t have permission to access this resource.',
        });
      }

      req.user = {
        id: session.user.id,
        email: session.user.email,
        name: session.user.name,
        role: session.user.role as string,
        emailVerified: session.user.emailVerified,
      };

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default auth;
