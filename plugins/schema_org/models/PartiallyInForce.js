const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PartiallyInForce extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PartiallyInForce] })
}