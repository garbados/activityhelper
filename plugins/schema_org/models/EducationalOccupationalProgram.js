const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EducationalOccupationalProgram extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EducationalOccupationalProgram] })
}