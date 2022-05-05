const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BodyMeasurementWaist extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BodyMeasurementWaist] })
}