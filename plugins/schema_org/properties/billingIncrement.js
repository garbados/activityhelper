const { context } = require('../base')

module.exports = function (API) {
  class BillingIncrement extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BillingIncrement] })
}