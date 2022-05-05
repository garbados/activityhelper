const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ReservationPending extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ReservationPending] })
}