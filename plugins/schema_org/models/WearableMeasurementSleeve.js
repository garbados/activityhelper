const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableMeasurementSleeve extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableMeasurementSleeve] })
}