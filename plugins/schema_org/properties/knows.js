const { context } = require('../base')

module.exports = function (API) {
  class Knows extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Knows] })
}