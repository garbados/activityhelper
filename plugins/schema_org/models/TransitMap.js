const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TransitMap extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TransitMap] })
}