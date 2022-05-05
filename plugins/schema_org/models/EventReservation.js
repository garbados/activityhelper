const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EventReservation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EventReservation] })
}