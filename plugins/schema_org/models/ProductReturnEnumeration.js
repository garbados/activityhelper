const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ProductReturnEnumeration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ProductReturnEnumeration] })
}