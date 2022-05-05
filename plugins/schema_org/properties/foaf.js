const { context } = require('../base')

module.exports = function (API) {
  class Foaf extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Foaf] })
}