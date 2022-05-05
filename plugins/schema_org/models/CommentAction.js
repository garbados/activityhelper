const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CommentAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CommentAction] })
}