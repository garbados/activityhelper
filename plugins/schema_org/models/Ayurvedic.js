const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Ayurvedic extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Ayurvedic] })
}