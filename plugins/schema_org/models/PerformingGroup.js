const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PerformingGroup extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PerformingGroup] })
}