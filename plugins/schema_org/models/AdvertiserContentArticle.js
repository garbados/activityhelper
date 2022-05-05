const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AdvertiserContentArticle extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AdvertiserContentArticle] })
}