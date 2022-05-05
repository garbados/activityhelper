const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OfferItemCondition extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OfferItemCondition] })
}