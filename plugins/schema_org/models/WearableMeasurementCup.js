const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableMeasurementCup extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableMeasurementCup] })
}