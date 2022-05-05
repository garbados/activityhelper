const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Code extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Code] })
}