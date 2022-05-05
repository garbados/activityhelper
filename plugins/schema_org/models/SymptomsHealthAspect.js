const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SymptomsHealthAspect extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SymptomsHealthAspect] })
}