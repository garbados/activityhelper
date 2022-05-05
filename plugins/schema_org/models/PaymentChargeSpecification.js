const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PaymentChargeSpecification extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PaymentChargeSpecification] })
}