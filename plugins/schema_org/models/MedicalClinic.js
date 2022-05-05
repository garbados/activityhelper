const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalClinic extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalClinic] })
}