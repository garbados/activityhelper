const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CommentPermission extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CommentPermission] })
}