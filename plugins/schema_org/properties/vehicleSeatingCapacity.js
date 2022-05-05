const { context } = require('../base')

module.exports = function (API) {
  class VehicleSeatingCapacity extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [VehicleSeatingCapacity] })
}