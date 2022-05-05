const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class QuoteAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [QuoteAction] })
}