const { context } = require('../base')

module.exports = function (API) {
  class Mentions extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Mentions] })
}