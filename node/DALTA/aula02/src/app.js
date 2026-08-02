const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

const mongoUri = process.env.MONGO_URI || 'mongodb+srv://balta:balta@cluster0.iseibzj.mongodb.net/?retryWrites=true&w=majority';

// Conecta ao banco
mongoose.connect(mongoUri)
    .then(() => console.log('MongoDB conectado com sucesso'))
    .catch((error) => console.error('Falha ao conectar no MongoDB:', error.message));

//carregar models
const Product = require('./models/product')

//Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/products-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;