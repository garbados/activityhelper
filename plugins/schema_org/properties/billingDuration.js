const { context } = require('../base')

module.exports = function (API) {
  class BillingDuration extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BillingDuration] })
}