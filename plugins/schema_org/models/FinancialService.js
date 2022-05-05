const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class FinancialService extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [FinancialService] })
}