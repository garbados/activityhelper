const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SelfCareHealthAspect extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SelfCareHealthAspect] })
}