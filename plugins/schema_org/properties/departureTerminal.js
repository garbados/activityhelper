const { context } = require('../base')

module.exports = function (API) {
  class DepartureTerminal extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DepartureTerminal] })
}