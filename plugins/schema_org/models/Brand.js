const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Brand extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Brand] })
}