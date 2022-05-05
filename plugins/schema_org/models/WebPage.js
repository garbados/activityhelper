const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WebPage extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WebPage] })
}