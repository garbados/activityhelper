const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ProfessionalService extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ProfessionalService] })
}