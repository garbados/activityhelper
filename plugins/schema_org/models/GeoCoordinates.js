const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class GeoCoordinates extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [GeoCoordinates] })
}