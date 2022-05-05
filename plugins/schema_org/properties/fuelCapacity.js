const { context } = require('../base')

module.exports = function (API) {
  class FuelCapacity extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [FuelCapacity] })
}