const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DecontextualizedContent extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DecontextualizedContent] })
}