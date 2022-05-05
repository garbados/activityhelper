const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BackgroundNewsArticle extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BackgroundNewsArticle] })
}