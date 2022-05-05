const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MultiPlayer extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MultiPlayer] })
}