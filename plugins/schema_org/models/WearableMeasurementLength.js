const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableMeasurementLength extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableMeasurementLength] })
}