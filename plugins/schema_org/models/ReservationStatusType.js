const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ReservationStatusType extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ReservationStatusType] })
}