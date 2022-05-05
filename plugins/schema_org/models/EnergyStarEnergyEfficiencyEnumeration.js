const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EnergyStarEnergyEfficiencyEnumeration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EnergyStarEnergyEfficiencyEnumeration] })
}