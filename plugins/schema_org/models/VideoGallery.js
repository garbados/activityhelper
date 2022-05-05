const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class VideoGallery extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [VideoGallery] })
}