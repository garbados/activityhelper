const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalStudyStatus extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalStudyStatus] })
}