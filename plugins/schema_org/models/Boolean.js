const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Boolean extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Boolean] })
}