import { Request, Response, NextFunction } from 'express';
import Service from '../services/TeamService';

export default class Controller {
  private service = new Service();

  getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const teams = await this.service.getAll();
      return res.status(200).json(teams);
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const teams = await this.service.getById(id);
      return res.status(200).json(teams);
    } catch (error) {
      next(error);
    }
  };
}
