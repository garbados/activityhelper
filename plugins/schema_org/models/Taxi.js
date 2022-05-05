const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Taxi extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Taxi] })
}