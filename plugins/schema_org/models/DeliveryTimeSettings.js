const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DeliveryTimeSettings extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DeliveryTimeSettings] })
}