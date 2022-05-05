const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ScholarlyArticle extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ScholarlyArticle] })
}