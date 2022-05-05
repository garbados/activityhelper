const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BodyMeasurementHead extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BodyMeasurementHead] })
}