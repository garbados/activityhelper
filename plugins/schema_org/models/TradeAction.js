const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TradeAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TradeAction] })
}