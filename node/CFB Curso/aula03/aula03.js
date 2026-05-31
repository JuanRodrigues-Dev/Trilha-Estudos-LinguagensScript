
const servidor = http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'text/html'})
  if(req.url == '/'){
    res.write('<h1>Seja Bem-Vindo</h1>')
  }else if(req.url == '/canal'){
    res.write('<h1>CFB Cursos</h1>')
  }else if(req.url == '/curso'){
    res.write('<h1>Coneca os cursos do nosso Canal</h1>')
  }else if(req.url == '/curso/node'){
    res.write('<h1>Curso de Node</h1>')
  }
  res.end()
})
servidor.listen(porta,host,()=>{console.log('Servidor Rodando')})