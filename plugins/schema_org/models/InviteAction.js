const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class InviteAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [InviteAction] })
}