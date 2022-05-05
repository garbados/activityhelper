const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AnalysisNewsArticle extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AnalysisNewsArticle] })
}