import { Router } from 'express';

import user from './UserRouter';
import team from './TeamRouter';
import match from './MatchRouter';
import leaderboard from './LeaderboardRouter';

const routes = Router();

routes.use('/login', user);
routes.use('/teams', team);
routes.use('/matches', match);
routes.use('/leaderboard', leaderboard);

export default routes;
