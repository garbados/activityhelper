const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DemoAlbum extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DemoAlbum] })
}