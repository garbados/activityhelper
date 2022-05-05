const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BodyMeasurementUnderbust extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BodyMeasurementUnderbust] })
}