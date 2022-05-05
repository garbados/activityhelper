const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Observational extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Observational] })
}