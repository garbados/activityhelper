const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ImageGallery extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ImageGallery] })
}