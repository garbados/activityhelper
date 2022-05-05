const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalSymptom extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalSymptom] })
}