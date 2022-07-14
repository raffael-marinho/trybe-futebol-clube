import { Request, Response, NextFunction } from 'express';
import JWT from '../../src/ultils/Jwt';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  const token = authorization as string;
  const jwt = new JWT();
  if (!jwt.validateToken(token)) {
    return next({ status: 401, message: 'Token must be a valid token' });
  }
  next();
};

export default validateToken;