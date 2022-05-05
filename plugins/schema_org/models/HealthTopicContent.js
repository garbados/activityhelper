const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HealthTopicContent extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HealthTopicContent] })
}