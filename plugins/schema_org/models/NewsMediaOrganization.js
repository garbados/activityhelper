const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class NewsMediaOrganization extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [NewsMediaOrganization] })
}