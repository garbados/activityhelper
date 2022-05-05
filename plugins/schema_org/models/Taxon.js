const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Taxon extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Taxon] })
}