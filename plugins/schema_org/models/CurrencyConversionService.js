const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CurrencyConversionService extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CurrencyConversionService] })
}