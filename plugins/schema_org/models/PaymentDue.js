const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PaymentDue extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PaymentDue] })
}