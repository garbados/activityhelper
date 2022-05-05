const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BrokerageAccount extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BrokerageAccount] })
}