const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BodyMeasurementHand extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BodyMeasurementHand] })
}