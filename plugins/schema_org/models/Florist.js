const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Florist extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Florist] })
}