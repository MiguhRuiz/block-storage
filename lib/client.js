const request = require('request-promise')
const Promise = require('bluebird')

class Client {

  constructor (opt) {
    this.options = opt || {}
    this.token = this.options.token
    this.url = 'http://api.digitalocean.com/v2/volumes'
  }

  list (callback) {
    var opts = {
      method: 'GET',
      uri: this.url,
      headers: {
        'Authorization': `Bearer ${this.token}`
      },
      json: true
    }

    return Promise.resolve(request(opts)).asCallback(callback)
  }

}

module.exports = Client
