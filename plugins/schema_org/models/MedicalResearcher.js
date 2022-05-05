const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalResearcher extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalResearcher] })
}