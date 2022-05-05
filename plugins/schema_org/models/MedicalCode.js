const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalCode extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalCode] })
}