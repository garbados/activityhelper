const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RentalVehicleUsage extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RentalVehicleUsage] })
}