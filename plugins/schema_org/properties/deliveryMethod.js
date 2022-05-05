const { context } = require('../base')

module.exports = function (API) {
  class DeliveryMethod extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DeliveryMethod] })
}