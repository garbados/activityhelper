const { context } = require('../base')

module.exports = function (API) {
  class AppliesToDeliveryMethod extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AppliesToDeliveryMethod] })
}