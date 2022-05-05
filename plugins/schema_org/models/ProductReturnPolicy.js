const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ProductReturnPolicy extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ProductReturnPolicy] })
}