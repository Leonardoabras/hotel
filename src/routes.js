import { Router } from 'express'; //const { Router } = require('express');

import multer from 'multer';
import uploadConfig from './config/upload';

import SessionController from './controllers/SessionController'
import HotelController from './controllers/HotelController';
import ReservaController from './controllers/ReservaController';

const routes = new Router();
const upload = multer(uploadConfig);

//Rotas referentes a sessão de usuarios (sessions)
routes.get('/sessions', SessionController.index);
routes.post('/sessions', SessionController.store);


//Rotas referentes a manutenção de hoteis
routes.get('/hoteis', HotelController.index);
routes.get('/hoteis', HotelController.index);
routes.post('/hoteis', upload.single('imagem'), HotelController.store);
routes.put('/hoteis', HotelController.update);

//Rotas referentes a reservas de apartamentos
routes.post('/hoteis/:hotel_id/reserva', ReservaController.store);
export default routes;
module.exports = routes;