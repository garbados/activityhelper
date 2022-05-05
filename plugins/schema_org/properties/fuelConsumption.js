const { context } = require('../base')

module.exports = function (API) {
  class FuelConsumption extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [FuelConsumption] })
}