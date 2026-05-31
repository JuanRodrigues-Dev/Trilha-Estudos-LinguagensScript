const http = require('http')
const porta = process.env.PORT
const serv = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write('CFB Cursos')
    res.end()
})
serv.listen(porta,()=>{console.log("Rodando")})