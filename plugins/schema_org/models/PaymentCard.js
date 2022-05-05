const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PaymentCard extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PaymentCard] })
}