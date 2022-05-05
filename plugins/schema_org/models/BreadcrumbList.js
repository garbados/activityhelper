const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BreadcrumbList extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BreadcrumbList] })
}