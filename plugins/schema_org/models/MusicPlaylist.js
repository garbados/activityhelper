const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MusicPlaylist extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MusicPlaylist] })
}