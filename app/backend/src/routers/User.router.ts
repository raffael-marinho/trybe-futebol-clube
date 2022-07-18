import { Router } from 'express';
import validateLoginBody from '../middlewares/ValidateLoginBody.middleware';
import Controller from '../MSC/controllers/User.controller';
import validateToken from '../middlewares/ValidateToken.middleware';

const routes = Router();

const controller = new Controller();

routes.post('/', validateLoginBody, controller.login);
routes.get('/validate', validateToken, controller.validate);

export default routes;
