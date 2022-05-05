const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Urologic extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Urologic] })
}