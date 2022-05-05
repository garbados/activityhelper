const { context } = require('../base')

module.exports = function (API) {
  class VehicleSpecialUsage extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [VehicleSpecialUsage] })
}