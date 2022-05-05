const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class FlightReservation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [FlightReservation] })
}