const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SearchResultsPage extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SearchResultsPage] })
}