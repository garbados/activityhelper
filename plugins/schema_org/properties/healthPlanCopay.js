const { context } = require('../base')

module.exports = function (API) {
  class HealthPlanCopay extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HealthPlanCopay] })
}