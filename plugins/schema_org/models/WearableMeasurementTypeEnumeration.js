const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableMeasurementTypeEnumeration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableMeasurementTypeEnumeration] })
}