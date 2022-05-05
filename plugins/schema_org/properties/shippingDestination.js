const { context } = require('../base')

module.exports = function (API) {
  class ShippingDestination extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ShippingDestination] })
}