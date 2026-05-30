var http = require('http');

http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  if (req.method === 'GET' && req.url === '/buscar') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let numero = {
      temperatura: Math.round(Math.random() * 10),
      nivel: Math.round(Math.random() * 10),
      pressao: Math.round(Math.random() * 10)
    };
    return res.end(JSON.stringify(numero));
  }

  if (req.method === 'POST' && req.url === '/gravar') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      console.log('Dados recebidos em /gravar:', body);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'ok', recebido: JSON.parse(body) }));
    });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Rota não encontrada' }));
}).listen(8080);

console.log('Servidor rodando em http://localhost:8080');
