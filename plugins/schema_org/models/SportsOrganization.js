const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SportsOrganization extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SportsOrganization] })
}