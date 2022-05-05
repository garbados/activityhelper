const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TreatmentsHealthAspect extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TreatmentsHealthAspect] })
}