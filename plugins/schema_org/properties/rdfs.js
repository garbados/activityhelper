const { context } = require('../base')

module.exports = function (API) {
  class Rdfs extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Rdfs] })
}