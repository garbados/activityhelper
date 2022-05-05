const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DepositAccount extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DepositAccount] })
}