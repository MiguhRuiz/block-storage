const request = require('request-promise')
const Promise = require('bluebird')

class Client {

  constructor (opt) {
    this.options = opt || {}
    this.token = this.options.token
    this.url = 'https://api.digitalocean.com/v2/volumes'
  }

  get(id, callback) {
    const opts = {
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
    const opts = {
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
    const opts = {
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
    const opts = {
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
    const opts = {
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
    const opts = {
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

  delete(id, callback) {
    const opts = {
      method: 'DELETE',
      uri : `${this.url}/${id}`,
      headers: {
        'Authorization': `Bearer ${this.token}`
      },
      json: true
    }

    return Promise.resolve(request(opts)).asCallback(callback)
  }

}

module.exports = Client
