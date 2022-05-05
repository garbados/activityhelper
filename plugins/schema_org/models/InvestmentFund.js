const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class InvestmentFund extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [InvestmentFund] })
}