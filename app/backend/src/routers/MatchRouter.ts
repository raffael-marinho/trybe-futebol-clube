import { Router } from 'express';
import validateToken from '../middlewares/ValidateTokenMiddleware';
import Controller from '../MSC/controllers/MatchController';
import validateMatchBody from '../middlewares/ValidateMatchBodyMiddleware';

const routes = Router();

const controller = new Controller();

routes.get('/matches', controller.getAll);
routes.post('/matches', validateMatchBody, validateToken, controller.create);
routes.patch('/matches/:id/finish', controller.finish);
routes.patch('/matches/:id', controller.goalsUpdate);

export default routes;
