const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HealthClub extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HealthClub] })
}