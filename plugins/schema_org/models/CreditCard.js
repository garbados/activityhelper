const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CreditCard extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CreditCard] })
}