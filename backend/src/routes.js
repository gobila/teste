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

//produto
routes.get("/produtos", produtoController.index);


routes.post("/addproduto", celebrate({
    [Segments.BODY]:Joi.object().keys({
        nome:Joi.string().required(),
        valor:Joi.string().required(),
    })
}), produtoController.create);



//produto
routes.get("/pedido", pedidoController.index);


routes.post("/addpedido", celebrate({
    [Segments.BODY]:Joi.object().keys({
        produto_id:Joi.interger().required(),
        cliente_id:Joi.interger().required(),
        valor:Joi.string().required(),
    })
}), pedidoController.create);


module.exports = routes