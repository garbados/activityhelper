const { context } = require('../base')

module.exports = function (API) {
  class BillingStart extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BillingStart] })
}