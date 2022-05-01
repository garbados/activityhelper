/* global describe, it */
'use strict'

const assert = require('assert').strict
const API = require('..')

const person = require('./fixtures/person')

describe('activitypub', function () {
  it('should produce a similar object to what is given', function () {
    const model = API.fromObject(person)
    assert.deepEqual(model.publish(), person)
  })

  it('should validate objects ok', function () {
    // should not throw
    API.validate(person)
  })
})
