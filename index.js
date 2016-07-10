var client = require('./lib/client')

function blockStorage(options) {
  return new client(options);
}

module.exports = {
  blockStorage: blockStorage
}
