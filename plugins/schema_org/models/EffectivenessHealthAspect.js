const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EffectivenessHealthAspect extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EffectivenessHealthAspect] })
}