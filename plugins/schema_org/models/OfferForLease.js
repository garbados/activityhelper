const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OfferForLease extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OfferForLease] })
}