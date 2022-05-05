const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ProductModel extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ProductModel] })
}