const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PaymentAutomaticallyApplied extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PaymentAutomaticallyApplied] })
}