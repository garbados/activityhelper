const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DeliveryEvent extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DeliveryEvent] })
}