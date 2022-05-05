const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PublicationIssue extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PublicationIssue] })
}