const { context } = require('../base')

module.exports = function (API) {
  class EstimatesRiskOf extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EstimatesRiskOf] })
}