const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LiveAlbum extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LiveAlbum] })
}