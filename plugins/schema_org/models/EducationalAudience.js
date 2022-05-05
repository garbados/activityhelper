const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EducationalAudience extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EducationalAudience] })
}