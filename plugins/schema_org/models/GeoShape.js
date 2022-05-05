const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class GeoShape extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [GeoShape] })
}