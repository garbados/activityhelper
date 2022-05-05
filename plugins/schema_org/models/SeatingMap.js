const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SeatingMap extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SeatingMap] })
}