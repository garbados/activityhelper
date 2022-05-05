const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ReservationConfirmed extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ReservationConfirmed] })
}