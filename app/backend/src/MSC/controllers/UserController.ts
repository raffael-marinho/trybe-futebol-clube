import { Request, Response, NextFunction } from 'express';
import Service from '../services/UserService';

export default class Controller {
  private service = new Service();

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const token = await this.service.login({ email, password });
      return res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  };

  validate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { authorization } = req.headers;
      const token = authorization as string;
      const role = await this.service.validate(token);
      return res.status(200).json(role);
    } catch (error) {
      next(error);
    }
  };
}
