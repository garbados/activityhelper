const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AdministrativeArea extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AdministrativeArea] })
}