const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class UserLikes extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [UserLikes] })
}