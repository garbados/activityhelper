const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MoneyTransfer extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MoneyTransfer] })
}