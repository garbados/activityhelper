const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Enumeration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Enumeration] })
}