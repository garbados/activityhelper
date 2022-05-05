const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PregnancyHealthAspect extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PregnancyHealthAspect] })
}