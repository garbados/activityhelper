const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AuthorizeAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AuthorizeAction] })
}