const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ArtGallery extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ArtGallery] })
}