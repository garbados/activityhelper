const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalTherapy extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalTherapy] })
}