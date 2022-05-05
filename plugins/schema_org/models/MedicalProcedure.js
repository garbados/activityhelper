const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalProcedure extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalProcedure] })
}