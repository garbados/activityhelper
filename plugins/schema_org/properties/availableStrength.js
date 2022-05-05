const { context } = require('../base')

module.exports = function (API) {
  class AvailableStrength extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AvailableStrength] })
}