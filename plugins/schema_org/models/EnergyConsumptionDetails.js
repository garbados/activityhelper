const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EnergyConsumptionDetails extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EnergyConsumptionDetails] })
}