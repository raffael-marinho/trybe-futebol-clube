import { Request, Response, NextFunction } from 'express';
import GenericError from '../../src/ultils/GenericError';

const error = (err: GenericError, _req: Request, res: Response, _next: NextFunction) => {
  if (err.status) return res.status(err.status).json({ message: err.message });
  console.log(err.message);

  return res.status(500).json({ message: 'Internal server error' });
};

export default error;