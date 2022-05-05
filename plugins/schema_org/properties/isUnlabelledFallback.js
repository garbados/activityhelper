const { context } = require('../base')

module.exports = function (API) {
  class IsUnlabelledFallback extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IsUnlabelledFallback] })
}