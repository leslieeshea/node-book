const http = require('http');
const url = require('url');

function start() {
  function onRequest(request, response) {
    const pathname = url.parse(request.url).pathname;
    /*eslint-disable-next-line*/
    console.log('Request for ' + pathname + 'received.');
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hello World');
    response.end();
  }
  http.createServer(onRequest).listen(8888);
  /*eslint-disable-next-line*/
  console.log('Server has started');
}

exports.starts = start;
