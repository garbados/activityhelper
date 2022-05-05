const { context } = require('../base')

module.exports = function (API) {
  class CustomerRemorseReturnFees extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CustomerRemorseReturnFees] })
}