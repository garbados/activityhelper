const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableMeasurementHeight extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableMeasurementHeight] })
}