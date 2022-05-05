const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PaymentPastDue extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PaymentPastDue] })
}