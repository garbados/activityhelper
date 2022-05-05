const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalConditionStage extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalConditionStage] })
}