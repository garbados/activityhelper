const { context } = require('../base')

module.exports = function (API) {
  class ArrivalBoatTerminal extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ArrivalBoatTerminal] })
}