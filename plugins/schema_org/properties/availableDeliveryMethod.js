const { context } = require('../base')

module.exports = function (API) {
  class AvailableDeliveryMethod extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AvailableDeliveryMethod] })
}