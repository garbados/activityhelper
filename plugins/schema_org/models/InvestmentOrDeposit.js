const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class InvestmentOrDeposit extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [InvestmentOrDeposit] })
}