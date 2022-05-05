const { context } = require('../base')

module.exports = function (API) {
  class LoanPaymentAmount extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [LoanPaymentAmount] })
}