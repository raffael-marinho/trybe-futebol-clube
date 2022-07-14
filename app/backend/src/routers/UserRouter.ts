import { Router } from 'express';
import validateLoginBody from '../middlewares/ValidateLoginBody.middleware';
import Controller from '../../src/MSC/controllers/UserController';
import validateToken from '../middlewares/ValidateToken.middleware';

const routes = Router();

const controller = new Controller();

routes.post('/login', validateLoginBody, controller.login);
routes.get('/validate', validateToken, controller.validate);

export default routes;