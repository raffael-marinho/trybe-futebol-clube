import { Request, Response, NextFunction } from 'express';
import schema from '../../src/schemas/login.schema';

const validateLoginBody = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const { error } = schema.validate({ email, password });
  if (error) return res.status(400).json({ message: 'All fields must be filled' });
  next();
};

export default validateLoginBody;