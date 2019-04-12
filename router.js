function route(handle, pathname, response, request) {
  /*eslint-disable-next-line*/
  console.log('About to route a request for ' + pathname);

  if(typeof handle[pathname] === 'function') {
    handle[pathname](response, request);
  } else {
    /*eslint-disable-next-line*/
    console.log('No request handler found for ' + pathname);
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.write('404 Not found');
    response.end();
  }
}

exports.route = route;
