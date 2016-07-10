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

  actions(id, callback) {
    var opts = {
      method: 'GET',
      uri: `${this.url}/${id}/actions`,
      headers: {
        'Authorization': `Bearer ${this.token}`
      },
      json: true
    }

    return Promise.resolve(request(opts)).asCallback(callback)
  }

  attach(volume, droplet, callback) {
    var opts = {
      method: 'POST',
      uri: `${this.url}/actions`,
      headers: {
        'Authorization': `Bearer ${this.token}`
      },
      body: {
        "type": "attach",
        "droplet_id": droplet,
        "volume_id": volume,
        "region": "nyc1"
      },
      json: true
    }

    return Promise.resolve(request(opts)).asCallback(callback)
  }

  detach(volume, droplet, callback) {
    var opts = {
      method: 'POST',
      uri: `${this.url}/actions`,
      headers: {
        'Authorization': `Bearer ${this.token}`
      },
      body: {
        "type": "detach",
        "droplet_id": droplet,
        "volume_id": volume,
        "region": "nyc1"
      },
      json: true
    }

    return Promise.resolve(request(opts)).asCallback(callback)
  }

  delete() {}

}

module.exports = Client
