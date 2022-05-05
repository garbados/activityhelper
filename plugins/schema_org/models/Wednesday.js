const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Wednesday extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Wednesday] })
}