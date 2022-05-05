const { context } = require('../base')

module.exports = function (API) {
  class HealthPlanMarketingUrl extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HealthPlanMarketingUrl] })
}