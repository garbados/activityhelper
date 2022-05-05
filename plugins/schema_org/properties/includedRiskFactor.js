const { context } = require('../base')

module.exports = function (API) {
  class IncludedRiskFactor extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IncludedRiskFactor] })
}