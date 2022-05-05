const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableMeasurementHips extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableMeasurementHips] })
}