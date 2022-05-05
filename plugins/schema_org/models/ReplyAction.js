const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ReplyAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ReplyAction] })
}