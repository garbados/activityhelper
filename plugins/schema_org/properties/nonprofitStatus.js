const { context } = require('../base')

module.exports = function (API) {
  class NonprofitStatus extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NonprofitStatus] })
}