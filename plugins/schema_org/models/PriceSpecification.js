const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PriceSpecification extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PriceSpecification] })
}