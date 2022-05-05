const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class StatisticalPopulation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [StatisticalPopulation] })
}