const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class FreeReturn extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [FreeReturn] })
}