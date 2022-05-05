const { context } = require('../base')

module.exports = function (API) {
  class GameLocation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [GameLocation] })
}