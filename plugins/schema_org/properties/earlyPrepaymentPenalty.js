const { context } = require('../base')

module.exports = function (API) {
  class EarlyPrepaymentPenalty extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EarlyPrepaymentPenalty] })
}