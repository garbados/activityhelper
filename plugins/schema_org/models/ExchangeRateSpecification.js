const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ExchangeRateSpecification extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ExchangeRateSpecification] })
}