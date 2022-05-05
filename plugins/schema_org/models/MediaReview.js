const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MediaReview extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MediaReview] })
}