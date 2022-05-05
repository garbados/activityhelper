const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ShippingRateSettings extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ShippingRateSettings] })
}