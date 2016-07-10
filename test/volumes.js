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
