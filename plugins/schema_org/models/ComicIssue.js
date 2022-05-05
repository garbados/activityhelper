const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ComicIssue extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ComicIssue] })
}