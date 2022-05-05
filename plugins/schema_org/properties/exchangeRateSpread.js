const { context } = require('../base')

module.exports = function (API) {
  class ExchangeRateSpread extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ExchangeRateSpread] })
}