const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TransformedContent extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TransformedContent] })
}