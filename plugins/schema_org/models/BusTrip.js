const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BusTrip extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BusTrip] })
}