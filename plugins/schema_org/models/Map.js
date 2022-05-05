const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Map extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Map] })
}