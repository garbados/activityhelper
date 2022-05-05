const { context } = require('../base')

module.exports = function (API) {
  class AcceptedPaymentMethod extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AcceptedPaymentMethod] })
}