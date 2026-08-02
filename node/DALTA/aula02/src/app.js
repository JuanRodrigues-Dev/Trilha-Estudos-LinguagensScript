const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();
//conecta banco
mongoose.connect('mongodb+srv://balta:balta@cluster0.iseibzj.mongodb.net/')

//Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/products-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;