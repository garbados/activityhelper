const { context } = require('../base')

module.exports = function (API) {
  class ShippingDetails extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ShippingDetails] })
}