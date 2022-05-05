const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OccupationalExperienceRequirements extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OccupationalExperienceRequirements] })
}