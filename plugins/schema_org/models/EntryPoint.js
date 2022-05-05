const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EntryPoint extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EntryPoint] })
}