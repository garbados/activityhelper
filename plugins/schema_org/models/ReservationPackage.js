const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ReservationPackage extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ReservationPackage] })
}