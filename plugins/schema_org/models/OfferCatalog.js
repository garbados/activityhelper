const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OfferCatalog extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OfferCatalog] })
}