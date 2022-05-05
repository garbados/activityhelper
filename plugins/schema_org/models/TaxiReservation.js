const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TaxiReservation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TaxiReservation] })
}