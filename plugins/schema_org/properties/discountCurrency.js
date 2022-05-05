const { context } = require('../base')

module.exports = function (API) {
  class DiscountCurrency extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DiscountCurrency] })
}