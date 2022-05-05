const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Playground extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Playground] })
}