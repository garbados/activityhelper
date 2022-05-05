const { context } = require('../base')

module.exports = function (API) {
  class PaymentMethodId extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PaymentMethodId] })
}