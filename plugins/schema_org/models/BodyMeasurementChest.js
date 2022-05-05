const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BodyMeasurementChest extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BodyMeasurementChest] })
}