const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Pediatric extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Pediatric] })
}