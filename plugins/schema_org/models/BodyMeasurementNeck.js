const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BodyMeasurementNeck extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BodyMeasurementNeck] })
}