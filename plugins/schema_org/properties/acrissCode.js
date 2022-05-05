const { context } = require('../base')

module.exports = function (API) {
  class AcrissCode extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AcrissCode] })
}