const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ScreeningHealthAspect extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ScreeningHealthAspect] })
}