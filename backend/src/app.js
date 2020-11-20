const express = require('express');
const bodyParser = require('body-parser');

const cliente = require('./controller/pedidoController');
const routes = require('./routes');


const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use('/', routes);

module.exports = app;