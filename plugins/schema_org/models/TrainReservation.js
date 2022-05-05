const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TrainReservation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TrainReservation] })
}