const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BodyMeasurementArm extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BodyMeasurementArm] })
}