const express = require('express')
const rotas = require('./rotas/rotas')
const porta = process.env.PORT || 3000

const app = express()

app.use('/',rotas)

app.use((req,res)=>{
    res.send('CFB Cursos')
})

app.listen(porta, ()=>{console.log(`Rodando na porta ${porta}`)})
