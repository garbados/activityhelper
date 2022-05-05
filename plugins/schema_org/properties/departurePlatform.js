const { context } = require('../base')

module.exports = function (API) {
  class DeparturePlatform extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DeparturePlatform] })
}