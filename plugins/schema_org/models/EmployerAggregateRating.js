const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EmployerAggregateRating extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EmployerAggregateRating] })
}