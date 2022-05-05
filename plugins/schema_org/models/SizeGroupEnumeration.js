const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SizeGroupEnumeration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SizeGroupEnumeration] })
}