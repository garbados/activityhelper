const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LoanOrCredit extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LoanOrCredit] })
}