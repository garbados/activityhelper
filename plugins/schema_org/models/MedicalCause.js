const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalCause extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalCause] })
}