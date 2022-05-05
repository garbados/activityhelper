const { context } = require('../base')

module.exports = function (API) {
  class ShippingLabel extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ShippingLabel] })
}