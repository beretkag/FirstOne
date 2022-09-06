const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.write('2/14 SZFT Szofverfejlesztő\n');
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);

server.listen(8080);