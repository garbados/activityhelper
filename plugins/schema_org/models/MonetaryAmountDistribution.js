const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MonetaryAmountDistribution extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MonetaryAmountDistribution] })
}