const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BoatTrip extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BoatTrip] })
}