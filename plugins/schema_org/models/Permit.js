const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Permit extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Permit] })
}