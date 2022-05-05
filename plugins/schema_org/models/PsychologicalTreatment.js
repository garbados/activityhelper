const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PsychologicalTreatment extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PsychologicalTreatment] })
}