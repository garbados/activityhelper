const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class FundingScheme extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [FundingScheme] })
}