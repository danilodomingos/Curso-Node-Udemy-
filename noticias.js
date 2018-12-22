var http = require('http');

http.createServer(function (req, res) {

  var categoria = req.url;

  res.writeHead(200, { 'Content-Type': 'text/plain', 'Content-Encoding': 'UTF-8' });

  if (categoria == "/tecnologia")
    res.end("Notícias de Tecnologia");

  else if (categoria == "/moda")
    res.end("Notícias de Moda")

  else if (categoria == "/beleza")
    res.end("Notícias de Beleza");

  else res.end("Portal de Notícias");



}).listen(3000);
console.log('Server running at http://localhost:3000/');