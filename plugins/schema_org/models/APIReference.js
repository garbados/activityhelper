const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class APIReference extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [APIReference] })
}