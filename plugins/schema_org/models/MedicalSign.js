const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalSign extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalSign] })
}