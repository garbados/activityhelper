const { context } = require('../base')

module.exports = function (API) {
  class AvailableTest extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AvailableTest] })
}