const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalAudienceType extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalAudienceType] })
}