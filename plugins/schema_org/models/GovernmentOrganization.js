const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class GovernmentOrganization extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [GovernmentOrganization] })
}