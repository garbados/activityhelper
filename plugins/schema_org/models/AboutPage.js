const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AboutPage extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AboutPage] })
}