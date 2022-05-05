const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class VenueMap extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [VenueMap] })
}