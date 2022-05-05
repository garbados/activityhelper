const { context } = require('../base')

module.exports = function (API) {
  class ReturnMethod extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ReturnMethod] })
}