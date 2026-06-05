const http = require('http')
const eventos = require('events')
const EventoEmissor = new eventos.EventEmitter()
const final = ()=>{console.log('Fim do Processo')}
EventoEmissor.on('msg',()=>{console.log('curso de node')})
EventoEmissor.on('fim',final)


const port = process.env.PORT || 3000

const retorno = ()=>{console.log('Servidor Rodando')}
const servidor = http.createServer((req,res)=>{
    
    EventoEmissor.emit('msg')

    res.writeHead(200,{'Contetnt-Type':'text/plain'})
    res.write('CFB Cursos')
    EventoEmissor.emit('fim')
    res.end()
})

servidor.listen(port,retorno)