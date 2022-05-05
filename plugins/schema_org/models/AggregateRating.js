const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AggregateRating extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AggregateRating] })
}