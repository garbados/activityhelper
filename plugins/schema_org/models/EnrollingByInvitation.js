const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EnrollingByInvitation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EnrollingByInvitation] })
}