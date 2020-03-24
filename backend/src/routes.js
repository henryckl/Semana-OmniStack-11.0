import { Router } from 'express';

import connection from './database/connection';
import OngController from './controllers/OngController';
const routes = new Router();

routes.get('/ongs', OngController.index);

routes.post('/ongs', OngController.create);

export default routes;
