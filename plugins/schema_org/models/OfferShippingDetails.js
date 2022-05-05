const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OfferShippingDetails extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OfferShippingDetails] })
}