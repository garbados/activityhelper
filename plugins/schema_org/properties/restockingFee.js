const { context } = require('../base')

module.exports = function (API) {
  class RestockingFee extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RestockingFee] })
}