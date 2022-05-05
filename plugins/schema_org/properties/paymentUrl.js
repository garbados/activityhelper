const { context } = require('../base')

module.exports = function (API) {
  class PaymentUrl extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PaymentUrl] })
}