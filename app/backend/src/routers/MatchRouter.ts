import { Router } from 'express';
import validateToken from '../middlewares/ValidateTokenMiddleware';
import Controller from '../MSC/controllers/MatchController';
import validateMatchBody from '../middlewares/ValidateMatchBodyMiddleware';

const routes = Router();

const controller = new Controller();

routes.get('/', controller.getAll);
routes.post('/', validateMatchBody, validateToken, controller.create);
routes.patch('/:id/finish', controller.finish);
routes.patch('/:id', controller.goalsUpdate);

export default routes;
