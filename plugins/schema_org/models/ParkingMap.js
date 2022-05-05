const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ParkingMap extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ParkingMap] })
}