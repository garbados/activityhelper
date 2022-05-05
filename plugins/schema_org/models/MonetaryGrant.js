const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MonetaryGrant extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MonetaryGrant] })
}