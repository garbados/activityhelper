const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class QuantitativeValueDistribution extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [QuantitativeValueDistribution] })
}