const { context } = require('../base')

module.exports = function (API) {
  class AppliesToPaymentMethod extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AppliesToPaymentMethod] })
}