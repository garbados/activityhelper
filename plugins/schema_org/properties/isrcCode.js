const { context } = require('../base')

module.exports = function (API) {
  class IsrcCode extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IsrcCode] })
}