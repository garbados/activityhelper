const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalBusiness extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalBusiness] })
}