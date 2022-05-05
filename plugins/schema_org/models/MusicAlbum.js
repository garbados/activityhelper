const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MusicAlbum extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MusicAlbum] })
}