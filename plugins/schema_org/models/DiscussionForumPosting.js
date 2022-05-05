const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DiscussionForumPosting extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DiscussionForumPosting] })
}