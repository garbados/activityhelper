const { context } = require('../base')

module.exports = function (API) {
  class IdentifyingTest extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IdentifyingTest] })
}