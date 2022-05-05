const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalEvidenceLevel extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalEvidenceLevel] })
}