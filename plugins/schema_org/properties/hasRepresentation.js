const { context } = require('../base')

module.exports = function (API) {
  class HasRepresentation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HasRepresentation] })
}