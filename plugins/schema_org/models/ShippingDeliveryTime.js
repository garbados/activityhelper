const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ShippingDeliveryTime extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ShippingDeliveryTime] })
}