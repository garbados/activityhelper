const { context } = require('../base')

module.exports = function (API) {
  class RenegotiableLoan extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RenegotiableLoan] })
}