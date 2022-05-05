const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SportsActivityLocation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SportsActivityLocation] })
}