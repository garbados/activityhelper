const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TouristTrip extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TouristTrip] })
}