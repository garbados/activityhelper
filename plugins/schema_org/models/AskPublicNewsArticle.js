const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AskPublicNewsArticle extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AskPublicNewsArticle] })
}