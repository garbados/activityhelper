const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ProductReturnUnspecified extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ProductReturnUnspecified] })
}