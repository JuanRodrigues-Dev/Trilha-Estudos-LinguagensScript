const http = require('http')
const fs = require('fs')
const porta = process.env.port

const serv = http.createServer((req,res)=>{
    fs.readFile('site.html',(err,arquivo)=>{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(arquivo)
        return res.end
    })
})
serv.listen(porta || 3000 , ()=>{console.log('Servidor Rodando')})