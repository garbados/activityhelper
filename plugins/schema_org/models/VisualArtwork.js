const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class VisualArtwork extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [VisualArtwork] })
}