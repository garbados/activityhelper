const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MediaGallery extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MediaGallery] })
}