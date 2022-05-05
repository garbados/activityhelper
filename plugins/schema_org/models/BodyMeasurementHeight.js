const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BodyMeasurementHeight extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BodyMeasurementHeight] })
}