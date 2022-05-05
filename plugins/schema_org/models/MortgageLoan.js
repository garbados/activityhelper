const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MortgageLoan extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MortgageLoan] })
}