const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Audience extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Audience] })
}