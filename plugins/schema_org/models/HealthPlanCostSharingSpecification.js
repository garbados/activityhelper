const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HealthPlanCostSharingSpecification extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HealthPlanCostSharingSpecification] })
}