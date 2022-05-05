const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Product extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Product] })
}