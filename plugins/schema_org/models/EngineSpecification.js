const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EngineSpecification extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EngineSpecification] })
}