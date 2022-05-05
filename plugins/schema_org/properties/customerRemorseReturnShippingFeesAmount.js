const { context } = require('../base')

module.exports = function (API) {
  class CustomerRemorseReturnShippingFeesAmount extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CustomerRemorseReturnShippingFeesAmount] })
}