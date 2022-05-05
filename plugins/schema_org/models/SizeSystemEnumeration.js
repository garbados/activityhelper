const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SizeSystemEnumeration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SizeSystemEnumeration] })
}