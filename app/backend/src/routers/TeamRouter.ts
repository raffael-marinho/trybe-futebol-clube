import { Router } from 'express';
import Controller from '../MSC/controllers/TeamController';

const routes = Router();

const controller = new Controller();

routes.get('/teams', controller.getAll);
routes.get('/teams/:id', controller.getById);

export default routes;
