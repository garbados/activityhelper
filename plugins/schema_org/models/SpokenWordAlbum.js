const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SpokenWordAlbum extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SpokenWordAlbum] })
}