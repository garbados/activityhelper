const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalContraindication extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalContraindication] })
}