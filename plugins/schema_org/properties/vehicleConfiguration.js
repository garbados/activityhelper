const { context } = require('../base')

module.exports = function (API) {
  class VehicleConfiguration extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [VehicleConfiguration] })
}