const { context } = require('../base')

module.exports = function (API) {
  class VehicleModelDate extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [VehicleModelDate] })
}