const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BodyMeasurementWeight extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BodyMeasurementWeight] })
}