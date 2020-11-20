const express = require ('express');
const { celebrate, Segments, Joi} = require ('celebrate');

const clienteController = require('./controller/clienteController');
const pedidoController = require('./controller/pedidoController');
const produtoController = require('./controller/produtoController');

const routes = express.Router();

//cliente
routes.get("/cliente", clienteController.index);


routes.post("/addcliente", celebrate({
    [Segments.BODY]:Joi.object().keys({
        nome:Joi.string().required(),
        nasc:Joi.string().required(),
        tel:Joi.string().required()
    })
}), clienteController.create);


module.exports = routes