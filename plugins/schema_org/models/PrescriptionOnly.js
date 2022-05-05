const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PrescriptionOnly extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PrescriptionOnly] })
}