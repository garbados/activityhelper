const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ReviewNewsArticle extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ReviewNewsArticle] })
}