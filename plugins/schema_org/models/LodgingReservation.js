const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LodgingReservation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LodgingReservation] })
}