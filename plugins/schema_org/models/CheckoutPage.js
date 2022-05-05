const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CheckoutPage extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CheckoutPage] })
}