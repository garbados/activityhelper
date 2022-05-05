const { context } = require('../base')

module.exports = function (API) {
  class IsLiveBroadcast extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IsLiveBroadcast] })
}