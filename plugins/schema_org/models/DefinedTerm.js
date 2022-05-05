const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DefinedTerm extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DefinedTerm] })
}