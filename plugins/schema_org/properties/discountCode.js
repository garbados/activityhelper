const { context } = require('../base')

module.exports = function (API) {
  class DiscountCode extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DiscountCode] })
}