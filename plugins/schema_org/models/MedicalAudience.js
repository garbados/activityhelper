const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalAudience extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalAudience] })
}