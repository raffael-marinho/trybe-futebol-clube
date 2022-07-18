import { Request, Response, NextFunction } from 'express';
import schema from '../schemas/Match.schema';

const validateMatchBody = (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;
  const { error } = schema.validate({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals });
  if (error) return next({ status: 409, message: error.message });
  next();
};

export default validateMatchBody;
