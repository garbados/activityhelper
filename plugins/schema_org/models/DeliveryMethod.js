const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DeliveryMethod extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DeliveryMethod] })
}