const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class UserReview extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [UserReview] })
}