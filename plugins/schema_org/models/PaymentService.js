const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PaymentService extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PaymentService] })
}