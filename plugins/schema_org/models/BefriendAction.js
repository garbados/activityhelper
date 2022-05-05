const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BefriendAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BefriendAction] })
}