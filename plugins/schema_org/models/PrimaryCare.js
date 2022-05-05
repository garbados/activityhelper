const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PrimaryCare extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PrimaryCare] })
}