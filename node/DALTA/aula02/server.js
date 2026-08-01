'use strict' //forca o javascript a ser criterioso

//Importanto modeulos , usa require para fazer isso e guarda em uma constante
const http = require('http');
const debug = require('debug')('bodestr:server');
const express = require('express');

//Instanciando porta para api
const app = express();
const port = 3000;
app.set('port', port);

//criando server http
const server = http.createServer(app);
const router = express.Router();
//Criando uma rota
const route = router.get ('/', (req,res,next)=>{
    res.status(200).send({
        title:"Node Store API",
        version:"0.0.1"
    });
});
//Usando a roda
app.use('/',route);
//Fazer que o servidor fique ouvindo a porta 3000
server.listen(port);
console.log('API rodando na porta' , port);