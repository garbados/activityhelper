const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SocialMediaPosting extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SocialMediaPosting] })
}