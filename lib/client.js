const request = require('request-promise')
const Promise = require('bluebird')

class Client {

  constructor (opt) {
    this.options = opt || {}
    this.token = this.options.token
    this.url = 'https://api.digitalocean.com/v2/volumes'
  }

  get(id, callback) {
    var opts = {
      method: 'GET',
      uri: `${this.url}/${id}`,
      headers: {
        'Authorization': `Bearer ${this.token}`
      },
      json: true
    }

    return Promise.resolve(request(opts)).asCallback(callback)
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

  create(body, callback) {
    var opts = {
      method: 'POST',
      uri: this.url,
      headers: {
        'Authorization': `Bearer ${this.token}`
      },
      body: body,
      json: true
    }

    return Promise.resolve(request(opts)).asCallback(callback)
  }

  actions() {}

  attach() {}

  detach() {}

  delete() {}

}

module.exports = Client
