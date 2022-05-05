const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PriceTypeEnumeration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PriceTypeEnumeration] })
}