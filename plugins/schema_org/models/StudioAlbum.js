const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class StudioAlbum extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [StudioAlbum] })
}