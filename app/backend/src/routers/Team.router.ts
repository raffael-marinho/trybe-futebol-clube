import { Router } from 'express';
import Controller from '../MSC/controllers/Team.controller';

const routes = Router();

const controller = new Controller();

routes.get('/', controller.getAll);
routes.get('/:id', controller.getById);

export default routes;
