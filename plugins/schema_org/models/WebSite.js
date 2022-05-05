const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WebSite extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WebSite] })
}