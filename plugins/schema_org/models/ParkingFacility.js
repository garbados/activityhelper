const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ParkingFacility extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ParkingFacility] })
}