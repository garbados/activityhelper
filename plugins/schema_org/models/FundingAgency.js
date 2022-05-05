const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class FundingAgency extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [FundingAgency] })
}