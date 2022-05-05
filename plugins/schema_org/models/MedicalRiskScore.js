const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalRiskScore extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalRiskScore] })
}