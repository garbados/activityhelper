const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalGuideline extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalGuideline] })
}