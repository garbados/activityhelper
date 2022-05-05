const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Comment extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Comment] })
}