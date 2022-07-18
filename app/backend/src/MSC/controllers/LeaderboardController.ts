import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';

const leaderboardService = new LeaderboardService();

export default class LeaderboardController {
  public getAllMatchsHome = async (req: Request, res: Response) => {
    const matches = await leaderboardService.getAllMatchsHome();
    return res.status(200).json(matches);
  };

  public getAllMatchsAway = async (req: Request, res: Response) => {
    const matches = await leaderboardService.getAllMatchsAway();
    return res.status(200).json(matches);
  };

  public getAllMatchs = async (req: Request, res: Response) => {
    const matches = await leaderboardService.getAllMatchs();
    return res.status(200).json(matches);
  };
}
