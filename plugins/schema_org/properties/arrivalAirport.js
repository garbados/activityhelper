const { context } = require('../base')

module.exports = function (API) {
  class ArrivalAirport extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ArrivalAirport] })
}