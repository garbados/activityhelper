const { context } = require('../base')

module.exports = function (API) {
  class DateVehicleFirstRegistered extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DateVehicleFirstRegistered] })
}