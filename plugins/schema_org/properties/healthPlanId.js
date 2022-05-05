const { context } = require('../base')

module.exports = function (API) {
  class HealthPlanId extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HealthPlanId] })
}