const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Sculpture extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Sculpture] })
}