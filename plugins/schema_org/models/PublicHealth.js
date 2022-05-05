const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PublicHealth extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PublicHealth] })
}