const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CompilationAlbum extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CompilationAlbum] })
}