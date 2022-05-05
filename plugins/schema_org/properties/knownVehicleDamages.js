const { context } = require('../base')

module.exports = function (API) {
  class KnownVehicleDamages extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [KnownVehicleDamages] })
}