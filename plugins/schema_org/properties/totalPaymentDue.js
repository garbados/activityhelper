const { context } = require('../base')

module.exports = function (API) {
  class TotalPaymentDue extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TotalPaymentDue] })
}