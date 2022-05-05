const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableMeasurementBack extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableMeasurementBack] })
}