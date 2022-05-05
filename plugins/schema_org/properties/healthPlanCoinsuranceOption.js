const { context } = require('../base')

module.exports = function (API) {
  class HealthPlanCoinsuranceOption extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HealthPlanCoinsuranceOption] })
}