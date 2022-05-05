const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableMeasurementChestOrBust extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableMeasurementChestOrBust] })
}