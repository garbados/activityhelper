const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalEntity extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalEntity] })
}