const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ExchangeRefund extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ExchangeRefund] })
}