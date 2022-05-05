const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WebAPI extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WebAPI] })
}