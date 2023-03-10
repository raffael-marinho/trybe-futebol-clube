import { Router } from 'express';
import validateLoginBody from '../middlewares/ValidateLoginBodyMiddleware';
import Controller from '../MSC/controllers/UserController';
import validateToken from '../middlewares/ValidateTokenMiddleware';

const routes = Router();

const controller = new Controller();

routes.post('/', validateLoginBody, controller.login);
routes.get('/validate', validateToken, controller.validate);

export default routes;
