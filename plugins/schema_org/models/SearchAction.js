const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SearchAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SearchAction] })
}