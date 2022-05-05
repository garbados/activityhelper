const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TechArticle extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TechArticle] })
}