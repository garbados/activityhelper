const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OrderReturned extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OrderReturned] })
}