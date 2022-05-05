const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MixtapeAlbum extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MixtapeAlbum] })
}