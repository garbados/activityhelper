const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PaymentStatusType extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PaymentStatusType] })
}