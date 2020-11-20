const express = require ('express');
const { celebrate, Segments, Joi} = require ('celebrate');

const clienteController = require('./controller/pedidoController');
const pedidoController = require('./controller/pedidoController');
const produtoController = require('./controller/produtoController');

const routes = express.Router();

//cliente
routes.get("/cliente", clienteController.index);

routes.post("/cadCliente", celebrate({
    [Segments.BODY]:Joi.object().keys({
        name:Joi.string().required(),
        nasc:Joi.string().required(),
        tel:Joi.string().required()
    })
}), clienteController.create);

//produto
routes.get("/produto", produtoController.index);

routes.post("cadProduto", celebrate({
    [Segments.BODY]:Joi.object().keys({
        name:Joi.string().required(),
        valor:Joi.string().required(),
    })
}), produtoController.create);

//pedido
routes.get("/pedido", pedidoController.index);

routes.post("cadPedido", celebrate({
    [Segments.BODY]:Joi.object().keys({
        cliente:Joi.string().required(),
        produtos:Joi.string().required(),
        valor:Joi.string().required(),
        data:Joi.date().required()
    })
}), produtoController.create);


module.exports = routes