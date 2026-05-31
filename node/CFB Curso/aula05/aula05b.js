const http = require('http')
const fs = require('fs')
const porta = process.env.port

const serv = http.createServer((req,res)=>{
    fs.appendFile('teste.txt','Curso de Node - CFB Cursos',(err)=>{
        if(err) throw err
        console.log('Arquivo criado')
    })
})
serv.listen(porta || 3000 , ()=>{console.log('Servidor Rodando')})