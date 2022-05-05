const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalProcedureType extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalProcedureType] })
}