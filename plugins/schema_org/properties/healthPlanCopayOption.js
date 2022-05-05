const { context } = require('../base')

module.exports = function (API) {
  class HealthPlanCopayOption extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HealthPlanCopayOption] })
}