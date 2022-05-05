const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BankOrCreditUnion extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BankOrCreditUnion] })
}