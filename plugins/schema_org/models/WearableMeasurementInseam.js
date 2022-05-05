const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableMeasurementInseam extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableMeasurementInseam] })
}