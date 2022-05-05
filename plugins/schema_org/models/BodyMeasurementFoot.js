const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BodyMeasurementFoot extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BodyMeasurementFoot] })
}