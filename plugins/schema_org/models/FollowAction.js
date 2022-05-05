const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class FollowAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [FollowAction] })
}