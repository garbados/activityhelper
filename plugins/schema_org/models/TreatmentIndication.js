const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TreatmentIndication extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TreatmentIndication] })
}