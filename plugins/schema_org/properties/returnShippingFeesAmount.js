const { context } = require('../base')

module.exports = function (API) {
  class ReturnShippingFeesAmount extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ReturnShippingFeesAmount] })
}