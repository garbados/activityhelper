const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BlogPosting extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BlogPosting] })
}