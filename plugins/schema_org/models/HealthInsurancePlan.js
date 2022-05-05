const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HealthInsurancePlan extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HealthInsurancePlan] })
}