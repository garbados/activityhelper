const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RemixAlbum extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RemixAlbum] })
}