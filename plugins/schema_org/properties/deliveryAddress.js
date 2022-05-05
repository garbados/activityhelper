const { context } = require('../base')

module.exports = function (API) {
  class DeliveryAddress extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DeliveryAddress] })
}