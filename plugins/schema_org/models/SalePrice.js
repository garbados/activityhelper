const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SalePrice extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SalePrice] })
}