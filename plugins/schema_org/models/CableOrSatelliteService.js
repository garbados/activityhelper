const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CableOrSatelliteService extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CableOrSatelliteService] })
}