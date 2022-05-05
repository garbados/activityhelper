const { context } = require('../base')

module.exports = function (API) {
  class HealthPlanNetworkId extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HealthPlanNetworkId] })
}