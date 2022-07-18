import { Router } from 'express';

import user from './User.router';
import team from './Team.router';
import match from './Match.router';
import leaderboard from './Leaderboard.router';

const routes = Router();

routes.use('/login', user);
routes.use('/teams', team);
routes.use('/matches', match);
routes.use('/leaderboard', leaderboard);

export default routes;
