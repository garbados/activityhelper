const { context } = require('../base')

module.exports = function (API) {
  class VehicleInteriorType extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [VehicleInteriorType] })
}