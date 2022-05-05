const { context } = require('../base')

module.exports = function (API) {
  class SupplyTo extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SupplyTo] })
}