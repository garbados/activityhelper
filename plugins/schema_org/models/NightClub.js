const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class NightClub extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [NightClub] })
}