const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PaymentMethod extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PaymentMethod] })
}