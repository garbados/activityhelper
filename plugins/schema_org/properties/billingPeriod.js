const { context } = require('../base')

module.exports = function (API) {
  class BillingPeriod extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BillingPeriod] })
}