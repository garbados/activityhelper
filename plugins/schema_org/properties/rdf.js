const { context } = require('../base')

module.exports = function (API) {
  class Rdf extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Rdf] })
}