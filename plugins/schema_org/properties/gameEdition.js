const { context } = require('../base')

module.exports = function (API) {
  class GameEdition extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [GameEdition] })
}