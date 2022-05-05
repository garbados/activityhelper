const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SportsTeam extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SportsTeam] })
}