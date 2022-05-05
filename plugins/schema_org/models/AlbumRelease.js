const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AlbumRelease extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AlbumRelease] })
}