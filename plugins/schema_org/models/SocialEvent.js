const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SocialEvent extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SocialEvent] })
}