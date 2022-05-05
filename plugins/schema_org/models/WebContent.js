const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WebContent extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WebContent] })
}