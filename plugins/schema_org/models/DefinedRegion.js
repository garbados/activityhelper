const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DefinedRegion extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DefinedRegion] })
}