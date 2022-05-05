const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableMeasurementWaist extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableMeasurementWaist] })
}