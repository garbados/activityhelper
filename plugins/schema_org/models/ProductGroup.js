const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ProductGroup extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ProductGroup] })
}