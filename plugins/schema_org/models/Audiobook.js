const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Audiobook extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Audiobook] })
}