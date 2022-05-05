const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MediaReviewItem extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MediaReviewItem] })
}