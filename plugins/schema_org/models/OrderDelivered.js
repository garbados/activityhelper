const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OrderDelivered extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OrderDelivered] })
}