const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HealthPlanFormulary extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HealthPlanFormulary] })
}