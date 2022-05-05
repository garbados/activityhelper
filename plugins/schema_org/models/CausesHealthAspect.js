const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CausesHealthAspect extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CausesHealthAspect] })
}