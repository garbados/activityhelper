const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalRiskCalculator extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalRiskCalculator] })
}