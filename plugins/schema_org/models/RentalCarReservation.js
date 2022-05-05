const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RentalCarReservation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RentalCarReservation] })
}