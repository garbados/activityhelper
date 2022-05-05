const { context } = require('../base')

module.exports = function (API) {
  class PlayerType extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PlayerType] })
}