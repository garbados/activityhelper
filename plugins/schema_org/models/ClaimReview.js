const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ClaimReview extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ClaimReview] })
}