const { context } = require('../base')

module.exports = function (API) {
  class DeliveryTime extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DeliveryTime] })
}