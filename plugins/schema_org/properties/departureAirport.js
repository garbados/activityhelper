const { context } = require('../base')

module.exports = function (API) {
  class DepartureAirport extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DepartureAirport] })
}