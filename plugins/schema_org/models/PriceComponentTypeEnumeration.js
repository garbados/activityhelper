const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PriceComponentTypeEnumeration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PriceComponentTypeEnumeration] })
}