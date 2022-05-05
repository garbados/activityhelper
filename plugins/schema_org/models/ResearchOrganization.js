const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ResearchOrganization extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ResearchOrganization] })
}