const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OrganizationRole extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OrganizationRole] })
}