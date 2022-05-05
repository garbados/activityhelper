const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TennisComplex extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TennisComplex] })
}