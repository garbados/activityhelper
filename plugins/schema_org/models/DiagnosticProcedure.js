const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DiagnosticProcedure extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DiagnosticProcedure] })
}