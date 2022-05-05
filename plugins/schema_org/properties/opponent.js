const { context } = require('../base')

module.exports = function (API) {
  class Opponent extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Opponent] })
}