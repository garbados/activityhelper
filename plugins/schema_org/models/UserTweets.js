const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class UserTweets extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [UserTweets] })
}