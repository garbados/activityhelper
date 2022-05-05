const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AccountingService extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AccountingService] })
}