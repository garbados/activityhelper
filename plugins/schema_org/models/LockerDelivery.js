const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LockerDelivery extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LockerDelivery] })
}