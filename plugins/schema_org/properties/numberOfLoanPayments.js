const { context } = require('../base')

module.exports = function (API) {
  class NumberOfLoanPayments extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NumberOfLoanPayments] })
}