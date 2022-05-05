const { context } = require('../base')

module.exports = function (API) {
  class Broker extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Broker] })
}