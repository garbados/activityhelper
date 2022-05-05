const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BoatReservation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BoatReservation] })
}