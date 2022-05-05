const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LiveBlogPosting extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LiveBlogPosting] })
}