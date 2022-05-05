const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OrderItem extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OrderItem] })
}