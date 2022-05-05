const { context } = require('../base')

module.exports = function (API) {
  class Gtin extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Gtin] })
}