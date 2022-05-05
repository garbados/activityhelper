const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AggregateOffer extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AggregateOffer] })
}