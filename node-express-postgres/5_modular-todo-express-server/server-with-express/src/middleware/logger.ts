import { NextFunction, Request, Response } from 'express';

//$ logger middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  // console.log('='.repeat(50));
  // console.log('📌 REQUEST LOG');
  // console.log('-'.repeat(50));
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  // console.log('='.repeat(50));
  next();
  //TODO: create a log.txt file then append for each api request
};

export default logger;
