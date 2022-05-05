const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PaymentDeclined extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PaymentDeclined] })
}