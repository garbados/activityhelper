const { context } = require('../base')

module.exports = function (API) {
  class Loser extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Loser] })
}