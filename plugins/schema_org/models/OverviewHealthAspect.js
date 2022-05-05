const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OverviewHealthAspect extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OverviewHealthAspect] })
}