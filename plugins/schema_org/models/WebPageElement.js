const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WebPageElement extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WebPageElement] })
}