const { context } = require('../base')

module.exports = function (API) {
  class ReturnFees extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ReturnFees] })
}