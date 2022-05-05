const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OrderCancelled extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OrderCancelled] })
}