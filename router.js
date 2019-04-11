function route(handle, pathname) {
  /*eslint-disable-next-line*/
  console.log('About to route a request for ' + pathname);
  if(typeof handle[pathname] === 'function') {
    return handle[pathname]();
  } else {
    /*eslint-disable-next-line*/
    console.log('No request handler found for ' + pathname);
    return '404 Not found';
  }
}

exports.route = route;
