const { context } = require('../base')

module.exports = function (API) {
  class PlayersOnline extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PlayersOnline] })
}