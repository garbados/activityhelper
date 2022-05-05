const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ProductReturnFiniteReturnWindow extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ProductReturnFiniteReturnWindow] })
}