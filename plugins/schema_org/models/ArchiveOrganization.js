const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ArchiveOrganization extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ArchiveOrganization] })
}