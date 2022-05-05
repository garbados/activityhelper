const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalTest extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalTest] })
}