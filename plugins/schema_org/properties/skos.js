const { context } = require('../base')

module.exports = function (API) {
  class Skos extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Skos] })
}