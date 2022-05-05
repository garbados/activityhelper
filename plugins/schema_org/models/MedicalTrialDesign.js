const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalTrialDesign extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalTrialDesign] })
}