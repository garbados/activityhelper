const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalSpecialty extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalSpecialty] })
}