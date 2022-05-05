const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TypesHealthAspect extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TypesHealthAspect] })
}