const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ParcelDelivery extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ParcelDelivery] })
}