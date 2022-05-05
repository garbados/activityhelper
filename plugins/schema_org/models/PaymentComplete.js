const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PaymentComplete extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PaymentComplete] })
}