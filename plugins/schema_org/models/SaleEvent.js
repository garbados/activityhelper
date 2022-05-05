const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SaleEvent extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SaleEvent] })
}