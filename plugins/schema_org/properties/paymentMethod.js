const { context } = require('../base')

module.exports = function (API) {
  class PaymentMethod extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PaymentMethod] })
}