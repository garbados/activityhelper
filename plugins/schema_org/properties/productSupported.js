const { context } = require('../base')

module.exports = function (API) {
  class ProductSupported extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ProductSupported] })
}