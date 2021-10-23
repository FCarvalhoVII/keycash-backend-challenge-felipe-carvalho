import express from 'express';
import DeleteRealtyController from './controllers/DeleteRealtyController';
import ListSingleRealtyController from './controllers/ListSingleRealtyController';
import RegisterRealtyController from './controllers/RegisterRealtyController';
import SearchRealtysController from './controllers/SearchRealtysController';
import UpdateRealtyController from './controllers/UpdateRealtyController';

const routes = express.Router();

routes.post('/register', RegisterRealtyController.handle);
routes.get('/list/:id', ListSingleRealtyController.handle);
routes.put('/update/:id', UpdateRealtyController.handle);
routes.delete('/delete/:id', DeleteRealtyController.handle);
routes.get('/search', SearchRealtysController.handle);

export default routes;