const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalOrganization extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalOrganization] })
}