const { context } = require('../base')

module.exports = function (API) {
  class CheckoutTime extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CheckoutTime] })
}