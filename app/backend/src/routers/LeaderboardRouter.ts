import { Router } from 'express';
import Controller from '../MSC/controllers/LeaderboardController';
// import validateToken from '../middlewares/validateToken.middleware';

const routes = Router();

const controller = new Controller();

routes.get('/', controller.getAllMatchs);
routes.get('/home', controller.getAllMatchsHome);
routes.get('/away', controller.getAllMatchsAway);

export default routes;
