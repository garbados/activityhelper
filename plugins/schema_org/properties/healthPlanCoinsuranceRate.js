const { context } = require('../base')

module.exports = function (API) {
  class HealthPlanCoinsuranceRate extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HealthPlanCoinsuranceRate] })
}