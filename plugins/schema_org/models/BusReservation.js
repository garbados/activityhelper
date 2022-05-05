const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BusReservation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BusReservation] })
}