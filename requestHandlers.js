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
