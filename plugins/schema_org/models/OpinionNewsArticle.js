const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OpinionNewsArticle extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OpinionNewsArticle] })
}