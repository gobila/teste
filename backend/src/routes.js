const express = require ('express');
const { celebrate, Segments, Joi} = require ('celebrate');

const clienteController = require('./controller/clienteController');
const pedidoController = require('./controller/pedidoController');
const produtoController = require('./controller/produtoController');

const routes = express.Router();

//cliente
routes.get("/cliente", clienteController.index);

//pedido
routes.get("/pedido", pedidoController.index);

//produto
routes.get("/produto", produtoController.index);


module.exports = routes