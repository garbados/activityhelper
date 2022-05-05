const { context } = require('../base')

module.exports = function (API) {
  class PriceCurrency extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PriceCurrency] })
}