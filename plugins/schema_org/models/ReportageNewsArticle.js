const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ReportageNewsArticle extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ReportageNewsArticle] })
}