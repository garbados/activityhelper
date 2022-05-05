const { context } = require('../base')

module.exports = function (API) {
  class FuelEfficiency extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [FuelEfficiency] })
}