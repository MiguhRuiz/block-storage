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
})

test('LIST volumes', async t => {
  let volumes = t.context.volumes

  let fixture = fixtures.getVolumes()
  let body = await volumes.list()

  t.deepEqual(body, fixture)
})