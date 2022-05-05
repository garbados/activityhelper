const { context } = require('../base')

module.exports = function (API) {
  class HttpMethod extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HttpMethod] })
}