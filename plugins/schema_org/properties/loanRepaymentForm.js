const { context } = require('../base')

module.exports = function (API) {
  class LoanRepaymentForm extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [LoanRepaymentForm] })
}