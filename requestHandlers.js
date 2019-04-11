// allows us to wire the request handlers into the router
// giving our router something to route to

function start() {
  /*eslint-disable-next-line*/
  console.log('Request handler "start" was called.');

  function sleep(milliSeconds) {
    const startTime = new Date().getTime();
    while(new Date.getTime() < startTime + milliSeconds);
  }

  sleep(10000);
  return 'Hello Start';
}

function upload() {
  /*eslint-disable-next-line*/
  console.log('Request handler "upload" was called.');
  return 'Hello Upload';
}

exports.start = start;
exports.upload = upload;
