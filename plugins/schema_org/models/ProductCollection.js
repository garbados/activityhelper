const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ProductCollection extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ProductCollection] })
}