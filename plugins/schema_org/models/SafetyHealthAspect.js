const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SafetyHealthAspect extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SafetyHealthAspect] })
}