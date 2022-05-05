const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Report extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Report] })
}