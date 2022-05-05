const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableMeasurementOutsideLeg extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableMeasurementOutsideLeg] })
}