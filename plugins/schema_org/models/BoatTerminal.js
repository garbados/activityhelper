const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BoatTerminal extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BoatTerminal] })
}