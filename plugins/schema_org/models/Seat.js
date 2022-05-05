const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Seat extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Seat] })
}