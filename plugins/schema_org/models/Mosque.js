const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Mosque extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Mosque] })
}