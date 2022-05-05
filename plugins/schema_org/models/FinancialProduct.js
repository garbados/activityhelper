const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class FinancialProduct extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [FinancialProduct] })
}