const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class NewsArticle extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [NewsArticle] })
}