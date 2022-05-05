const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SoftwareSourceCode extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SoftwareSourceCode] })
}