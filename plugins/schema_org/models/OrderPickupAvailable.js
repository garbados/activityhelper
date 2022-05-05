const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OrderPickupAvailable extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OrderPickupAvailable] })
}