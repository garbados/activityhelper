const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DiagnosticLab extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DiagnosticLab] })
}