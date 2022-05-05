const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HowOrWhereHealthAspect extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HowOrWhereHealthAspect] })
}