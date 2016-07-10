'use strict'
const test = require('ava')
const Volumes = require('..')
const fixtures = require('./fixtures')
const config = require('../config')

const token = config.token

test.beforeEach('Setup Client', async t => {
  t.context.volumes = new Volumes.blockStorage({token})
})

test('Client', async t => {
  let volumes = t.context.volumes

  t.is(typeof volumes.list, 'function', 'list is a function')
  t.is(typeof volumes.create, 'function', 'create is a function')
  t.is(typeof volumes.get, 'function', 'get is a function')
  t.is(typeof volumes.delete, 'function', 'delete is a function')
  t.is(typeof volumes.attach, 'function', 'attach is a function')
  t.is(typeof volumes.detach, 'function', 'detach is a function')
  t.is(typeof volumes.actions, 'function', 'actions is a function')
})

test('GET volumes', async t => {
  let volumes = t.context.volumes

  let fixture = fixtures.getVolumes()
  let body = await volumes.list()

  t.deepEqual(body, fixture)
})

test('GET a single volume', async t => {
  let volumes = t.context.volumes
  let volumeId = config.test.id

  let fixture = fixtures.getVolume()
  let body = await volumes.get(volumeId)

  t.deepEqual(body, fixture)
})

test('POST a volume', async t => {
  let volumes = t.context.volumes
  let data = {
    "size_gigabytes": 10,
    "name": "example",
    "description": "An awersome Block Storage",
    "region": "nyc1"
  }

  let fixture = fixtures.getVolume()
  let body = await volumes.create(data)

  t.deepEqual(body.volume.name, data.name)
})

test('GET actions of a single volume', async t => {
  let volumes = t.context.volumes
  let volumeId = config.test.id

  let body = await volumes.actions(volumeId)

  t.is(typeof body.meta.total, 'number', 'body.metal.total exists')
})

test('Attach a volume into a droplet', async t => {
  let volumes = t.context.volumes
  let volumeId = config.test.id
  let dropletId = config.test.droplet

  let body = await volumes.attach(volumeId, dropletId)

  t.is(body.action.type, 'attach_volume', 'The request has attached a volume into a droplet')
})

test('Detach a volume out of a droplet', async t => {
  let volumes = t.context.volumes
  let volumeId = config.test.id
  let dropletId = config.test.droplet

  let body = await volumes.detach(volumeId, dropletId)

  t.is(body.action.type, 'detach_volume', 'The request has detached a volume out of a droplet')
})

test('DELETE a single volume', async t => {
  let volumes = t.context.volumes
  let volumeId = config.test.id

  let body = await volumes.delete(volumeId)

  t.pass()
})
