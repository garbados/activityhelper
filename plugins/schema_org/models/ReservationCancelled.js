const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ReservationCancelled extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ReservationCancelled] })
}