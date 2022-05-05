const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableMeasurementCollar extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableMeasurementCollar] })
}