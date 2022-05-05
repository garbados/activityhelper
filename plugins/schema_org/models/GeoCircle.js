const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class GeoCircle extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [GeoCircle] })
}