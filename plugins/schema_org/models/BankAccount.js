const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BankAccount extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BankAccount] })
}