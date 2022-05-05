const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HealthAspectEnumeration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HealthAspectEnumeration] })
}