const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OrderStatus extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OrderStatus] })
}