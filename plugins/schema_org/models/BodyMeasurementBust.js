const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BodyMeasurementBust extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BodyMeasurementBust] })
}