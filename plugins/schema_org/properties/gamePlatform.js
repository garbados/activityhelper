const { context } = require('../base')

module.exports = function (API) {
  class GamePlatform extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [GamePlatform] })
}