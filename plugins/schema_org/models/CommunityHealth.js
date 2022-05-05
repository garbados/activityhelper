const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CommunityHealth extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CommunityHealth] })
}