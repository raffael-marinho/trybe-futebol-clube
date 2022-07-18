import { Router } from 'express';
import validateToken from '../middlewares/ValidateToken.middleware';
import Controller from '../MSC/controllers/Match.controller';
import validateMatchBody from '../middlewares/ValidateMatchBody.middleware';

const routes = Router();

const controller = new Controller();

routes.get('/', controller.getAll);
routes.post('/', validateMatchBody, validateToken, controller.create);
routes.patch('/:id/finish', controller.finish);
routes.patch('/:id', controller.goalsUpdate);

export default routes;
