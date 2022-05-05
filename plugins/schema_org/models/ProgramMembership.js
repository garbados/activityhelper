const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ProgramMembership extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ProgramMembership] })
}