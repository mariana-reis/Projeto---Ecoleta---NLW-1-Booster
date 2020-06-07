import express from 'express';

import PoinsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

//indez, ahow, create, update, delete
const routes = express.Router();
const poinsController = new PoinsController();
const intemsController = new ItemsController();



routes.get ('/items', intemsController.index);

routes.post('/points', poinsController.create);

routes.get('/points', poinsController.index);


routes.get('/points/:id', poinsController.show);



export default routes;

