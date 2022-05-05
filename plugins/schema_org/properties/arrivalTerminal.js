const { context } = require('../base')

module.exports = function (API) {
  class ArrivalTerminal extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ArrivalTerminal] })
}