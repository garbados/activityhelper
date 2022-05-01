/* global describe, it */
'use strict'

const assert = require('assert').strict
const API = require('..')

const object = require('./fixtures/object')

describe('activitystreams', function () {
  describe('core', function () {
    it('can create objects', function () {
      const model = new API.models.Object()
      assert.deepEqual(model.publish(), {
        '@context': 'https://www.w3.org/ns/activitystreams',
        type: 'Object'
      })
    })

    it('should produce a similar object to what is given', function () {
      const model = API.fromObject(object)
      assert.deepEqual(model.publish(), object)
    })

    it('should validate objects ok', function () {
      // should not throw
      API.validate(object)
    })
  })

  describe('extended', function () {
    // it('should produce a similar object to what is given', function () {
    //   const model = API.fromObject(person)
    //   assert.deepEqual(model.publish(), person)
    // })
    //
    // it.only('should validate objects ok', function () {
    //   // should not throw
    //   API.validate(person)
    // })
  })
})
