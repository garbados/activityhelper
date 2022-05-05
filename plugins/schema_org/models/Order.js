const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Order extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Order] })
}