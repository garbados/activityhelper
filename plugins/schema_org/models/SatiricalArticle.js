const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SatiricalArticle extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SatiricalArticle] })
}