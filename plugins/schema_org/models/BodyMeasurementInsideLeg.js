const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BodyMeasurementInsideLeg extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BodyMeasurementInsideLeg] })
}