const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalSignOrSymptom extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalSignOrSymptom] })
}