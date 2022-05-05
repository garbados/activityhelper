const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EnergyEfficiencyEnumeration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EnergyEfficiencyEnumeration] })
}