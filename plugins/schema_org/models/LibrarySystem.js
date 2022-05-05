const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LibrarySystem extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LibrarySystem] })
}