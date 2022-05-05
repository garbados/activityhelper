const { context } = require('../base')

module.exports = function (API) {
  class Payload extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Payload] })
}