const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalDevicePurpose extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalDevicePurpose] })
}