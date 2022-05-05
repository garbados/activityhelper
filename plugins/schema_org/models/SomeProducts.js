const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SomeProducts extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SomeProducts] })
}