const express = require('express');
const bodyParser = require('body-parser');

const cliente = require('./controller/pedidoController');
const routes = require('./routes');


const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use('/', routes);

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({error: error.message})
})

module.exports = app;