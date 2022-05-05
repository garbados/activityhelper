const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class NotInForce extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [NotInForce] })
}