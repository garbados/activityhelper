const { context } = require('../base')

module.exports = function (API) {
  class FreeShippingThreshold extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [FreeShippingThreshold] })
}