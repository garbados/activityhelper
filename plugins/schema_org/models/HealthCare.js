const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HealthCare extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HealthCare] })
}