const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalRiskFactor extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalRiskFactor] })
}