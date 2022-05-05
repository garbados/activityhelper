const { context } = require('../base')

module.exports = function (API) {
  class NumberOfPlayers extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NumberOfPlayers] })
}