const { context } = require('../base')

module.exports = function (API) {
  class VehicleInteriorColor extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [VehicleInteriorColor] })
}