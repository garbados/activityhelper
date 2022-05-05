const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class UnitPriceSpecification extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [UnitPriceSpecification] })
}