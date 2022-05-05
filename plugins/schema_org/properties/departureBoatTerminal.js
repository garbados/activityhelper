const { context } = require('../base')

module.exports = function (API) {
  class DepartureBoatTerminal extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DepartureBoatTerminal] })
}