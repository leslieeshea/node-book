function route(handle, pathname) {
  /*eslint-disable-next-line*/
  console.log('About to route a request for ' + pathname);
  if(typeof handle[pathname] === 'function') {
    handle[pathname]();
  } else {
    /*eslint-disable-next-line*/
    console.log('No request handler found for ' + pathname);
  }
}

exports.route = route;
