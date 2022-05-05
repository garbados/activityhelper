const { context } = require('../base')

module.exports = function (API) {
  class BenefitsSummaryUrl extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BenefitsSummaryUrl] })
}