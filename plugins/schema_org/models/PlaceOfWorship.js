const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PlaceOfWorship extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PlaceOfWorship] })
}