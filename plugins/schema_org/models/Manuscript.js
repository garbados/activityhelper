const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Manuscript extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Manuscript] })
}