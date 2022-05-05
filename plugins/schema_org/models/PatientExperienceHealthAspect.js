const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PatientExperienceHealthAspect extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PatientExperienceHealthAspect] })
}