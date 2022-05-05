const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class URL extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [URL] })
}