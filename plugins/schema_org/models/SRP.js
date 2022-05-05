const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SRP extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SRP] })
}