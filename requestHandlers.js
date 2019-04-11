// allows us to wire the request handlers into the router
// giving our router something to route to

function start() {
  /*eslint-disable-next-line*/
  console.log('Request handler "start" was called.');
}

function upload() {
  /*eslint-disable-next-line*/
  console.log('Request handler "upload" was called.');
}

exports.start = start;
exports.upload = upload;
