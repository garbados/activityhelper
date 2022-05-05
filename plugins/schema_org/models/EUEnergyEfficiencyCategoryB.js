const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EUEnergyEfficiencyCategoryB extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EUEnergyEfficiencyCategoryB] })
}