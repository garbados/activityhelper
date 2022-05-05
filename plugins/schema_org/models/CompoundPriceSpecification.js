const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CompoundPriceSpecification extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CompoundPriceSpecification] })
}