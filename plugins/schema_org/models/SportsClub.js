const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SportsClub extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SportsClub] })
}