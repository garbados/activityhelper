const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class StructuredValue extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [StructuredValue] })
}