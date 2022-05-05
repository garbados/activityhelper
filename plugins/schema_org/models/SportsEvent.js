const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SportsEvent extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SportsEvent] })
}