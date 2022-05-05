const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SideEffectsHealthAspect extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SideEffectsHealthAspect] })
}