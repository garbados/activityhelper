const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HealthcareConsideration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HealthcareConsideration] })
}