const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalObservationalStudyDesign extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalObservationalStudyDesign] })
}