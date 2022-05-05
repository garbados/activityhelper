const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MeasurementTypeEnumeration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MeasurementTypeEnumeration] })
}