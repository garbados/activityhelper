const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TaxiVehicleUsage extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TaxiVehicleUsage] })
}