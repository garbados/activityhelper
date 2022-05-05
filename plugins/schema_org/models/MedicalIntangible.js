const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalIntangible extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalIntangible] })
}