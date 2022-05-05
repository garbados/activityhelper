const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class StagesHealthAspect extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [StagesHealthAspect] })
}