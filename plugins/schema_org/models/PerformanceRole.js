const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PerformanceRole extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PerformanceRole] })
}