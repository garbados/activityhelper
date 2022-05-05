const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalDevice extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalDevice] })
}