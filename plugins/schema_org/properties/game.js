const { context } = require('../base')

module.exports = function (API) {
  class Game extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Game] })
}