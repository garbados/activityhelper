const { context } = require('../base')

module.exports = function (API) {
  class TickerSymbol extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TickerSymbol] })
}