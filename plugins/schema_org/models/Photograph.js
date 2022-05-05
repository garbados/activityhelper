const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Photograph extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Photograph] })
}