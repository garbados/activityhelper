const { context } = require('../base')

module.exports = function (API) {
  class PaymentAccepted extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PaymentAccepted] })
}