const { context } = require('../base')

module.exports = function (API) {
  class MonthlyMinimumRepaymentAmount extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MonthlyMinimumRepaymentAmount] })
}