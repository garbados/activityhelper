const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class GeospatialGeometry extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [GeospatialGeometry] })
}