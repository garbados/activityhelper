const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DeliveryChargeSpecification extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DeliveryChargeSpecification] })
}