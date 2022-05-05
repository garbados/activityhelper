const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalRiskEstimator extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalRiskEstimator] })
}