import { Request, Response, NextFunction } from 'express';
import Service from '../services/LeaderboardService';

export default class Controller {
  private service = new Service();

  getHome = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const teams = await this.service.getHome();
      return res.status(200).json(teams);
    } catch (error) {
      next(error);
    }
  };

  getAway = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const teams = await this.service.getAway();
      return res.status(200).json(teams);
    } catch (error) {
      next(error);
    }
  };
}
