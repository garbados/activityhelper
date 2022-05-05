const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PreSale extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PreSale] })
}