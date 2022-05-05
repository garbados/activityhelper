const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PublicToilet extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PublicToilet] })
}