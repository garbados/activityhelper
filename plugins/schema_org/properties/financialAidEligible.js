const { context } = require('../base')

module.exports = function (API) {
  class FinancialAidEligible extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [FinancialAidEligible] })
}