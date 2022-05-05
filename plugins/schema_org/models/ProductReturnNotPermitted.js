const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ProductReturnNotPermitted extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ProductReturnNotPermitted] })
}