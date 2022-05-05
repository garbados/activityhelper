const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EducationalOrganization extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EducationalOrganization] })
}