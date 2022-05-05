const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OfferForPurchase extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OfferForPurchase] })
}