const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Episode extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Episode] })
}