const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalStudy extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalStudy] })
}