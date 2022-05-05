const { context } = require('../base')

module.exports = function (API) {
  class PriceValidUntil extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PriceValidUntil] })
}