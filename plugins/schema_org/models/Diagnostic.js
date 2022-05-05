const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Diagnostic extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Diagnostic] })
}