const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Infectious extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Infectious] })
}