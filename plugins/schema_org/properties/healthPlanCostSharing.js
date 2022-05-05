const { context } = require('../base')

module.exports = function (API) {
  class HealthPlanCostSharing extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HealthPlanCostSharing] })
}