const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HealthPlanNetwork extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HealthPlanNetwork] })
}