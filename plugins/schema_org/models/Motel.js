const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Motel extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Motel] })
}