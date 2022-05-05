const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Library extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Library] })
}