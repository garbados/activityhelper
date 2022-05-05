const { context } = require('../base')

module.exports = function (API) {
  class ShippingSettingsLink extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ShippingSettingsLink] })
}