const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ShoppingCenter extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ShoppingCenter] })
}