const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class GettingAccessHealthAspect extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [GettingAccessHealthAspect] })
}