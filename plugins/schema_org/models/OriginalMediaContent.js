const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OriginalMediaContent extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OriginalMediaContent] })
}