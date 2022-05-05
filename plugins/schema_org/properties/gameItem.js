const { context } = require('../base')

module.exports = function (API) {
  class GameItem extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [GameItem] })
}