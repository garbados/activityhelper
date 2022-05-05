const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalGuidelineRecommendation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalGuidelineRecommendation] })
}