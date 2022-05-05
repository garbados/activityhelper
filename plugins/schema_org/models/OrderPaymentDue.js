const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OrderPaymentDue extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OrderPaymentDue] })
}