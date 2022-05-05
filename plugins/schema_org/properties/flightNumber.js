const { context } = require('../base')

module.exports = function (API) {
  class FlightNumber extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [FlightNumber] })
}