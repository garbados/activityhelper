const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ProductReturnUnlimitedWindow extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ProductReturnUnlimitedWindow] })
}