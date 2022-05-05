const { context } = require('../base')

module.exports = function (API) {
  class RiskFactor extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RiskFactor] })
}