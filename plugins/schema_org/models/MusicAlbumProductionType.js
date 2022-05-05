const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MusicAlbumProductionType extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MusicAlbumProductionType] })
}