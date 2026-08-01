'use strict' //forca o javascript a ser criterioso

//Importanto modeulos , usa require para fazer isso e guarda em uma constante
const app = require('../src/app');
const http = require('http');
const debug = require('debug')('bodestr:server');

const port = normalizePort(process.env.PORT || '3000');
app.set('port' , port);


//criando server http
const server = http.createServer(app);
//Criando uma rota


//Fazer que o servidor fique ouvindo a porta 3000
server.listen(port);
server.on('error', onError);
server.on('listening' , onListening);
console.log('API rodando na porta' , port);

function normalizePort(val){
    const port = parseInt(val,10);
    if(isNaN(port)){
        return val;
    }
    if(port >= 0){
        return port;
    }
    return false;
}

function onError (error){
    if(error.syscall != 'listen'){
        throw error;
    }
    const bind = typeof port === 'string' ?
        'Pipe ' + port:
        'Port ' + port;
    switch(error.node){
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case  'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening (){
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr 
        : 'port ' + addr.port;
        debug('Listening on ' + bind);
    }