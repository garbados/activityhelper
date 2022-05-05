const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalObservationalStudy extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalObservationalStudy] })
}