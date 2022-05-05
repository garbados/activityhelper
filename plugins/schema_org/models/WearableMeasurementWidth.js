const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableMeasurementWidth extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableMeasurementWidth] })
}