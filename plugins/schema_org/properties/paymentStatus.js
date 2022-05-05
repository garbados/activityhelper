const { context } = require('../base')

module.exports = function (API) {
  class PaymentStatus extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PaymentStatus] })
}